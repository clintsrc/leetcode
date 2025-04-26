/**
 * 2089. Find Target Indices After Sorting Array
 *
 * https://leetcode.com/problems/find-target-indices-after-sorting-array/
 * You are given a 0-indexed integer array nums and a target element target.
 *
 * A target index is an index i such that nums[i] == target.
 *
 * Return a list of the target indices of nums after sorting nums in
 * non-decreasing order. If there are no target indices, return an empty
 * list. The returned list must be sorted in increasing order.
 *
 * NOTES:
 * Efficiency is O(n log n) for the sort
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function targetIndices(nums: number[], target: number): number[] {
  let arrTarget: number[] = [];

  // non-decreasing order (non-lexical)
  nums.sort( (a, b) => a - b );

  // loop through the sorted list
  for (let num = 0; num < nums.length; num++) {
      // find the array values that match the target number
      if (target === nums[num]) {
          // add the index to the return array
          arrTarget.push(num)
      }
  }

  return arrTarget;
};

export default targetIndices;