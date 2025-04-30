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
 * O(log n): binary search divides the input in half stepwise
 *
 * @param {number[]} nums - array of ordered integers to search
 * @param {number} target - the number we're looking for
 * @return {number} - the array index of the match. -1 if not found
 */
function search(nums: number[], target: number): number {
  let lowest = 0; // lower bound index
  let highest = nums.length - 1;  // upper bound index

  // the lowest and highest index values will narrow
  while (lowest <= highest) {
    // set the middle element's index
    let mid = lowest + Math.floor((highest - lowest) / 2);
    // get it's value
    let guess = nums[mid];

    // check for a value match
    if (target === guess) {
      // found it!
      return mid;
    } else if (guess > target) {
      // target is lower than the middle element, so set the upper bound to one lower
      highest = mid - 1;
    } else {
      // target is higher, set the upper bound to one higher than the middle element
      lowest = mid + 1;
    }
  }

  // not found
  return -1;
}

export default search;
