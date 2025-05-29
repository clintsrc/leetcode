/**
 * 231. Power of Two
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 *
 * An integer n is a power of two, if there exists an integer x such that n == 2x.
 *
 * Follow up: Could you solve it without loops/recursion?
 *
 * NOTES:
 * Recursive method is O(log n)
 *
 * @param {number} n - given integer to test
 * @return {boolean} - true if it is a power of two, false otherwise
 */

/*
 * Recursive approach
 * 2 base cases:
 *  - n===1 means it's a power of 2
 *  - n is positive and n % 2 !== 0 means non-even
 * Recursive case divides the number in half to check the 2^x pattern
 *
 */
function isPowerOfTwo(n: number): boolean {
  if (n === 1) return true;
  if (n <= 0 || n % 2 !== 0) return false;
  return isPowerOfTwo(n / 2);
}

export default isPowerOfTwo;
