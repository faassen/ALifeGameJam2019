import {
  Environment,
  LSystemRule,
  LSystemRuleMap,
  Resource,
  ResourceCost,
  RuleName,
  TransportRule,
  TransportRuleMap,
  Tree,
  TreeNode,
} from "./domain"

class TestEnvironment extends Environment {
  public costs(ruleNames: RuleName[]): ResourceCost {
    return new Map<Resource, number>()
  }
}

test("LSystem layer works properly", () => {
  const environment = new TestEnvironment()
  const lSystemRuleMap = new Map<RuleName, LSystemRule>()
  lSystemRuleMap.set("A", new LSystemRule("A", ["A", "B"]))
  lSystemRuleMap.set("B", new LSystemRule("B", ["A"]))

  const transportRuleMap = new Map<RuleName, TransportRule>()
  const rootNode = new TreeNode("A", undefined)
  const tree = new Tree(rootNode, lSystemRuleMap, transportRuleMap, environment)

  tree.update()

  expect(rootNode.children.length)
    .toBe(2)
  expect(String(rootNode))
    .toBe("AAB")

  tree.update()
  expect(rootNode.children[0].children.length)
    .toBe(2)
  expect(String(rootNode))
    .toBe("AAABBA")
})

test("LSystem layer doesn't grow whithout resources", () => {
  const environment = new Environment()
  const lSystemRuleMap = new Map<RuleName, LSystemRule>()
  lSystemRuleMap.set("A", new LSystemRule("A", ["A", "B"]))
  lSystemRuleMap.set("B", new LSystemRule("B", ["A"]))

  const transportRuleMap = new Map<RuleName, TransportRule>()
  const rootNode = new TreeNode("A", undefined)
  const tree = new Tree(rootNode, lSystemRuleMap, transportRuleMap, environment)

  tree.update()

  expect(rootNode.children.length)
    .toBe(0)
  expect(String(rootNode))
    .toBe("A")
})
