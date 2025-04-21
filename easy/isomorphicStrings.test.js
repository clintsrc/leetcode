const isIsomorphic = require("./isomorphicStrings");

describe("isIsomorphic", () => {
  test("Example 1: 'egg' and 'add' should be isomorphic", () => {
    const s = "egg";
    const t = "add";
    expect(isIsomorphic(s, t)).toBe(true);
  });

  test("Example 2: 'foo' and 'bar' should not be isomorphic", () => {
    const s = "foo";
    const t = "bar";
    expect(isIsomorphic(s, t)).toBe(false);
  });

  test("Example 3: 'paper' and 'title' should be isomorphic", () => {
    const s = "paper";
    const t = "title";
    expect(isIsomorphic(s, t)).toBe(true);
  });
});
