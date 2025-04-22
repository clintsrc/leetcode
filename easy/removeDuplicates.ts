/**
 * 26. Remove Duplicates from Sorted Array
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates
 * in-place such
 * that each unique element appears only once. The relative order of the elements should be kept
 * the same. Then return the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, to get accepted, you need to do the
 * following things:
 * - Change the array nums such that the first k elements of nums contain the unique elements in
 *   the order they were present in nums initially. The remaining elements of nums are not important
 *   as well as the size of nums.
 * - Return k.
 *
 * Efficiency:
 * - O(n) time complexity iterating through the array once to identify unique elements.
 * - O(1) space complexity by modifying the input array in-place without using additional space
 *    other than the two pointers.
 *
 * Two-pointer technique is used for in-place array problems:
 * - i: slow pointer tracks the unique value position
 * - j: fast pointer traverses the array to determine the next unique element's position
 *
 * @param {number[]} nums - The array of numbers sorted in non-decreasing order.
 * @returns {number} The number of unique elements in the array, where the first k elements are the unique ones.
 */
var removeDuplicates = function (nums: number[]): number {
  let i = 0; // slow pointer tracks the unique value position

  // fast pointer seeks the next unique element's position
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      // fast pointer now points to a unique value
      // advance the slow pointer to the next position
      i++;
      // update the new position with the unique value
      nums[i] = nums[j];
    }
  }

  // the slow pointer's 1-based position represents the number of unique values
  return i + 1;
};

export default removeDuplicates;
