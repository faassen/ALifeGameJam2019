import p5 from "p5"
import { Vector } from "../classes/physics"
import { URLParameter } from "../utilities"

const parameters = new URLParameter()
const DEBUG = parameters.boolean("debug", false)
const size = parameters.int("size", 1000)
const numberOfAgents = parameters.int("agents", 1)
const maxDepth = parameters.int("depth", 3)
const rawRules = parameters.string("rules", "A:-C+B+C,B:A")
const rawConstants = parameters.string("constants", "+:55,-:-55")
const initialCondition = parameters.string("condition", "A")
const unitLength = parameters.int("length", 100)

const canvasSize = new Vector(size, size)
const agents: Agent[] = []
const rules = parseRules(rawRules)
const constants = parseConstants(rawConstants)

function log(message: string): void {
  if (DEBUG === false) {
    return
  }
  console.log(message)
}

const main = (p: p5) => {
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize.x, canvasSize.y)
    canvas.id("canvas")
    canvas.parent("canvas-parent")

    initializeAgents()
  }

  p.draw = () => {
    p.background(0)

    agents.forEach(agent => {
      agent.draw(p)
    })
  }
}

function initializeAgents(): void {
  for (let i = 0; i < numberOfAgents; i += 1) {
    const diff = new Vector(0, size * 0.4)
    const position = canvasSize.div(2)
      .add(diff)
    const lsystem = new LSystem(rules, constants)
    agents.push(new Agent(position, lsystem))
  }
}

function parseRules(raw: string | undefined): Map<string, string> {
  const map = new Map<string, string>()
  if (raw == undefined) {
    console.log(`No rule specified`)
    map.set("A", "-A++A")

    return map
  }
  const rawRuleSet = raw.split(",")
  rawRuleSet.forEach(line => {
    const keyValue = line.split(":")
    if (keyValue.length !== 2) {
      console.log(`[Warning] Parameter "rules" line "${line}" should be "<character>:<string>"`)

      return
    }
    map.set(keyValue[0], keyValue[1])
  })

  return map
}

function parseConstants(raw: string | undefined): Map<string, number> {
  const map = new Map<string, number>()
  if (raw == undefined) {
    console.log(`No constant specified`)
    map.set("+", 20)
    map.set("-", -20)

    return map
  }
  const rawRuleSet = raw.split(",")
  rawRuleSet.forEach(line => {
    const keyValue = line.split(":")
    if (keyValue.length !== 2) {
      console.log(`[Warning] Parameter "constants" line "${line}" should be "<character>:<number>"`)

      return
    }
    const angle = parseInt(keyValue[1], 10)
    if (angle === undefined) {
      console.log(`[Warning] Parameter "constants" line "${line}" should be "<character>:<number>"`)

      return
    }
    map.set(keyValue[0], angle)
  })

  return map
}

interface Drawable {
  draw(p: p5): void
}

class LSystem {
  public constructor(public readonly rules: Map<string, string>, public readonly constants: Map<string, number>) {
  }

  public draw(p: p5, initialCondition: string, position: Vector, depth: number): void {
    p.noFill()
    p.stroke(0xFF, 0x80)

    this.recursiveDraw(p, initialCondition, position, -90, depth)
  }

  private recursiveDraw(p: p5, condition: string, position: Vector, direction: number, depth: number): void {
    if (depth < 1) {
      return
    }

    let newDirection = direction
    const length = Math.pow(0.9, maxDepth - depth) * unitLength

    for (const c of condition) {
      const directionChange = this.constants.get(c)
      if (directionChange != undefined) {
        newDirection += directionChange
        continue
      }

      const radian = newDirection * (Math.PI / 180)
      const nextPosition = position.moved(radian, length)
      const center = nextPosition.add(position)
        .div(2)
      p.strokeWeight(0.5)
      p.stroke(0xFF, 0x80)
      p.line(position.x, position.y, nextPosition.x, nextPosition.y)

      const nextCondition = this.rules.get(c)
      if (nextCondition != undefined) {
        this.recursiveDraw(p, nextCondition, nextPosition, newDirection, depth - 1)
        continue
      }
    }
  }
}

class Agent implements Drawable {
  public constructor(public readonly position: Vector, public readonly lsystem: LSystem) {
  }

  public draw(p: p5): void {
    const condition = initialCondition == undefined ? "A" : initialCondition
    this.lsystem.draw(p, condition, this.position, maxDepth)
  }
}

const sketch = new p5(main)
