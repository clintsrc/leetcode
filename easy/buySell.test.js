const maxProfit = require('./buySell');

describe("maxProfit", () => {
  test("Example 1: Max profit from prices [7, 1, 5, 3, 6, 4]", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(5);
  });

  test("Example 2: No profit from prices [7, 6, 4, 3, 1]", () => {
    const prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
  });
});

