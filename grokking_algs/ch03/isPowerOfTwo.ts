/**
 * 231. Power of Two
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 *
 * An integer n is a power of two, if there exists an integer x such that n == 2x.
 *
 * Follow up: Could you solve it without loops/recursion?
 *
 * NOTES:
 * Recursive (brute-force) method is O(log n)
 * An alternative is to use binary math instead: O(1)
 *  It's more efficient, but more difficult to convey (and probably maintain)
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
// function isPowerOfTwo(n: number): boolean {
//   if (n === 1) return true;
//   if (n <= 0 || n % 2 !== 0) return false;
//   return isPowerOfTwo(n / 2);
// }

/*
 * Efficient binary math solution:
 *
 * 2^x = n
 * - only positive integers can be powers of 2
 * - a power of 2 only has a single bit set (1)
 * - n - 1 (subtrancting 1) flips the least significant bit in n
 *   and turns all bits to it's right to 1s
 *   Example:
 *     n =  1000 (8)
 *     n-1 = 0111 (7)
 *   Bitwise && of n and n - 1 determines:
 *     if 0, then n is a power of 2
 */
function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}

export default isPowerOfTwo;
