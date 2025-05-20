/**
 * 172. Factorial Trailing Zeroes
 *
 * https://leetcode.com/problems/factorial-trailing-zeroes/
 * Given an integer n, return the number of trailing zeroes in n!.
 *
 * Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
 *
 * Follow up: Could you write a solution that works in logarithmic time complexity?
 *
 * NOTES:
 * Efficiency is O(log n) logarithmic time
 *   Each iteration does 1 division, O(1) and 1 addition O(1).
 *   The loop itself runs O(log₅ n) times, or O(log n)
 *
 * Trailing zeroes come from factors of 10 in n!,
 * and since 10 = 2 × 5, and there are always more 2s than 5s,
 * we only need to count the number of times 5 is a factor
 * in numbers from 1 to n.
 *
 * @param {number} n - factorial number
 * @return {number} - the number of trailing zeros from the factorial total
 */
function trailingZeroes(n: number): number {
    let count = 0;
    let divisor = 5;    // count the number of times 5 is a factor

    while (divisor <= n) {
        count += Math.floor(n / divisor);
        divisor *= 5;
    }

    return count;
};

export default trailingZeroes;