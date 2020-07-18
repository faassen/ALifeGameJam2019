import {
  Environment,
  LSystemRule,
  LSystemRuleMap,
  ResourceCost,
  RuleName,
  TransportRule,
  TransportRuleMap,
  Tree,
  TreeNode,
} from "./domain"

test("LSystem layer works properly", () => {
  class TestEnvironment extends Environment {
    public costs(ruleNames: RuleName[]): ResourceCost {
      return { "water": 0, "energy": 0 }
    }
  }
  const environment = new TestEnvironment()
  const lSystemRuleMap = new Map<RuleName, LSystemRule>()
  lSystemRuleMap.set("A", new LSystemRule("A", ["A", "B"]))
  lSystemRuleMap.set("B", new LSystemRule("B", ["A"]))

  const transportRuleMap = new Map<RuleName, TransportRule>()

  const tree = new Tree(lSystemRuleMap, transportRuleMap, environment)
  const rootNode = new TreeNode("A", undefined)

  rootNode.update(tree)
  rootNode.update(tree)

  expect(rootNode.children.length)
    .toBe(2)
  expect(String(rootNode))
    .toBe("AAB")
})
