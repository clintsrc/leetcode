/**
 * 217. Contains Duplicate
 *
 * https://leetcode.com/problems/contains-duplicate/
 * Given an integer array nums, return true if any value
 * appears at least twice in the array, and return false
 * if every element is distinct.
 *
 * Set() is more practical than using a map since we
 * don't need a kvp -- just a way to identify unique
 * values.
 *
 * The complexity is O(n), the cost of the for loop
 * @param {number[]} nums array of numbers
 * @return {boolean} true if a duplicate was found
 */
function containsDuplicate(nums: number[]): boolean {
  const setNums = new Set();

  for (const num of nums) {
    // If the current value was found
    if (setNums.has(num)) {
      // It's a duplicate
      return true;
    } else {
      // Add it
      setNums.add(num);
    }
  }

  return false;
}

export default containsDuplicate;
