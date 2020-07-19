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

describe("TreeNode", () => {
  class TestEnvironment extends Environment {
    public costs(ruleNames: RuleName[]): ResourceCost {
      const waterCost = ruleNames.length * 10
      const energyCost = ruleNames.length * 10

      const cost = new Map<Resource, number>()
      cost.set(Resource.water, waterCost)
      cost.set(Resource.energy, energyCost)

      return cost
    }
  }

  const environment = new TestEnvironment()

  const lSystemRuleMap = new Map<RuleName, LSystemRule>()
  lSystemRuleMap.set("A", new LSystemRule("A", ["A", "B"]))
  lSystemRuleMap.set("B", new LSystemRule("B", ["A"]))

  const transportRuleMap = new Map<RuleName, TransportRule>()

  test("TreeNode can grow with resources", () => {
    const rootNode = new TreeNode("A", undefined)
    rootNode.nextResources.set(Resource.water, 20)
    rootNode.nextResources.set(Resource.energy, 20)
    rootNode.updateResourceState()  // FixMe: set to nextResource and call updateResourceState() is not very intuitive

    const tree = new Tree(rootNode, lSystemRuleMap, transportRuleMap, environment)

    tree.update()

    expect(rootNode.children.length)
      .toBe(2)
    expect(String(rootNode))
      .toBe("AAB")
    expect(rootNode.resources.get(Resource.water))
      .toBe(0)

    tree.update()
    expect(rootNode.children[0].children.length)
      .toBe(0)
    expect(String(rootNode))
      .toBe("AAB")
  })

  test("TreeNode can transport resources", () => {
    const parentResourceMapA = new Map<Resource, number>()
    const childResourceMapA = new Map<Resource, number>()
    childResourceMapA.set(Resource.water, 4)
    childResourceMapA.set(Resource.energy, 4)

    transportRuleMap.set("A", new TransportRule("A", parentResourceMapA, childResourceMapA))

    const rootNode = new TreeNode("A", undefined)
    rootNode.nextResources.set(Resource.water, 60)
    rootNode.nextResources.set(Resource.energy, 60)
    rootNode.updateResourceState()

    const tree = new Tree(rootNode, lSystemRuleMap, transportRuleMap, environment)

    tree.update()

    expect(rootNode.children.length)
      .toBe(2)
    expect(String(rootNode))
      .toBe("AAB")
    expect(rootNode.resources.get(Resource.water))
      .toBe(40)

    tree.update()
    expect(rootNode.children[0].children.length)
      .toBe(0)
    expect(String(rootNode))
      .toBe("AAB")
    expect(rootNode.resources.get(Resource.water))
      .toBe(32)

    tree.update()
    tree.update()
    tree.update()
    tree.update()
    expect(rootNode.resources.get(Resource.water))
      .toBe(0)
    expect(rootNode.children[0].resources.get(Resource.water))
      .toBe(20)

    tree.update()
    expect(rootNode.children[0].children.length)
      .toBe(2)
    expect(String(rootNode))
      .toBe("AAABBA")
  })

  test("TreeNode doesn't grow whithout resources", () => {
    const rootNode = new TreeNode("A", undefined)
    const tree = new Tree(rootNode, lSystemRuleMap, transportRuleMap, environment)

    tree.update()

    expect(rootNode.children.length)
      .toBe(0)
    expect(String(rootNode))
      .toBe("A")
  })
})
