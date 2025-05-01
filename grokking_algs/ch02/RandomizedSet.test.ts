import RandomizedSet from "./RandomizedSet";

describe("RandomizedSet", () => {
  let randomizedSet: RandomizedSet;

  beforeEach(() => {
    randomizedSet = new RandomizedSet();
    // Mock Math.random() to always return 0 — i.e., select the first element
    jest.spyOn(global.Math, "random").mockReturnValue(0.0);
  });

  afterEach(() => {
    // Restore Math.random() after each test
    jest.spyOn(global.Math, "random").mockRestore();
  });

  test("operations with the given test input", () => {
    expect(randomizedSet.insert(1)).toBe(true);     // insert 1
    expect(randomizedSet.remove(2)).toBe(false);    // remove 2 (not in set)
    expect(randomizedSet.insert(2)).toBe(true);     // insert 2
    expect(randomizedSet.getRandom()).toBe(1);      // returns first element (mocked)
    expect(randomizedSet.remove(1)).toBe(true);     // remove 1
    expect(randomizedSet.insert(2)).toBe(false);    // insert 2 (already exists)
    expect(randomizedSet.getRandom()).toBe(2);      // now only 2 remains
  });
});

