/**
 * 374. Guess Number Higher or Lower
 *
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 * We are playing the Guess Game. The game is as follows:
 * I pick a number from 1 to n. You have to guess which number I picked.
 * Every time you guess wrong, I will tell you whether the number I
 * picked is higher or lower than your guess.
 *
 * You call a pre-defined API int guess(int num), which returns three
 * possible results:
 *
 * -1: Your guess is higher than the number I picked (i.e. num > pick).
 * 1: Your guess is lower than the number I picked (i.e. num < pick).
 * 0: your guess is equal to the number I picked (i.e. num == pick).
 * Return the number that I picked.
 *
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return  -1 if num is higher than the picked number
 *          1 if num is lower than the picked number
 *          otherwise return 0
 * var guess = function(num) {}
 */
declare function guess(num: number): number;

/**
 *
 * @param {number} n - guess
 * @return {number} - -1 if num is higher than the picked number
 *                    1 if num is lower than the picked number
 *                    otherwise return 0
 */
// local tests use:
var guessNumber = function (guess: Function, n: number): number {
// var guessNumber = function (n: number): number {
  let high = n;
  let low = 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    const retVal = guess(mid);

    // found it!
    if(retVal === 0) {
      return mid;
    }

    if (retVal < 0) {
      // target is lower: set high to one lower than the guess to discard the upper half
      high = mid - 1;
    } else {
      // target is higher: set low to one higher than the guess to discard the lower half
      low = mid + 1;
    }
  }

  // number not found (unexpected)
  return -1;
};

export default guessNumber;
