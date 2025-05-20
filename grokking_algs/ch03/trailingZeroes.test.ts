import trailingZeroes from "./trailingZeroes";

describe('Leetcode 172 - Factorial Trailing Zeroes', () => {
  test('returns correct trailing zeroes for various inputs', () => {
    expect(trailingZeroes(3)).toBe(0);  // 3! = 6, no trailing zero
    expect(trailingZeroes(5)).toBe(1);  // 5! = 120, one trailing zero
    expect(trailingZeroes(0)).toBe(0);  // 0! = 1, no trailing zero
    // note: exceeds the bultin datatype limit
    expect(trailingZeroes(30)).toBe(7); // 30! = 265252859812191058636308480000000, seven trailing zeros
  });
});
