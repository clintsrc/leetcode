import fib from "./fib";

describe("Fibonacci Number - LeetCode 509", () => {
  test.each([
    [2, 1],
    [3, 2],
    [4, 3],
  ])("fib(%i) should return %i", (input, expected) => {
    expect(fib(input)).toBe(expected);
  });
});
