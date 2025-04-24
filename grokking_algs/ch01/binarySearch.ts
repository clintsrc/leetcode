/**
 * 704. Binary Search
 *
 * https://leetcode.com/problems/binary-search/
 * Given an array of integers nums which is sorted in ascending
 * order, and an integer target, write a function to search target
 * in nums. If target exists, then return its index. Otherwise,
 * return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums: number[], target: number): number {
  for (let num = 0; num < nums.length; num++) {
    if (nums[num] === target) {
      return num;
    }
  }

  return -1;
}

console.log(search([-1,0,3,5,9,12], 9));

export default search;
