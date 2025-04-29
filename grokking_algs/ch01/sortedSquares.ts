/**
 * 977. Squares of a Sorted Array
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * Given an integer array nums sorted in non-decreasing order, return an
 * array of the squares of each number sorted in non-decreasing order.
 *
 * NOTE:
 *
 * @param {number[]} nums - number array sorted in non-decreasing order
 * @return {number[]} - array of squares for each number sorted in
 *    non-decreasing order
 */
function sortedSquares(nums: number[]): number[] {
  for (let num = 0; num < nums.length; num++) {
    nums[num] **= 2;
  }

  return nums.sort((a, b) => a - b);
};

export default sortedSquares;
