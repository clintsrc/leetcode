/**
 * 509. Fibonacci Number
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the
 * Fibonacci sequence, such that each number is the sum of the two preceding ones,
 * starting from 0 and 1. That is,
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 *
 * Given n, calculate F(n).
 *
 * NOTES
 * Recursive call solution:
 *  Time complexity: O(2ⁿ), exponential time
 *  Space complexity: O(n), linear (for the call stack depth)
 *    fib(n - 1) and fib(n - 2) each make their own recursive calls, forming a
 *      'binary tree' of recursive calls\
 *
 * Memoized (cached) solution:
 *  Time complexity: O(n), each total is calculated once.
 *  Space complexity: O(n), linear (for the array cache and call stack depth)
 * Memoization is a specific kind of caching to optimize recursive functions by
 *  storing results of expensive calls, and returning the cached result when the
 *  same inputs occur again. It is top-down, breaking the initial problem into
 *  smaller problems
 *
 * To investigate: Tabulation (bottom-up). Calculate from the smallest problem
 * up to the initial problem in a loop instead of using more costly recursive calls
 *
 * @param {number} n
 * @return {number}
 *
 */

/* WARNING: This recursive solution will take longer with each call and can blow the
   stack for very large inputs */
// function fib(n: number): number {
//   // Use two base states for '1' and '0'. Both are valid but we don't want to allow negative values
//   if (n === 0) return 0;  // base state 0
//   if (n === 1) return 1;  // base state

//   // recursive state calls the sum of the input's 2 preceding values
//   return fib(n - 1) + fib(n - 2)
// };


/*
Cache the totals for more access effiency (the space efficiency suffers a little for unused index
values)
*/
let totals: number[] = [];  // cache the fib totals

/* Memoized solution returning cached results for a recursive call for improved efficiency */
function fib(n: number): number {

  // Memoize: don't recalculate a total
  if (totals[n] !== undefined) {
    return totals[n];
  }

  // Use two base states for '1' and '0'. Both are valid but we don't want to allow negative values
  if (n === 0) return 0;  // base state 0
  if (n === 1) return 1;  // base state

  // recursive state calls the sum of the input's 2 preceding values
  totals[n] = (fib(n - 1) + fib(n - 2));

  return totals[n];
};

export default fib;