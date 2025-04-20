/**
 * 1. Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * NOTE: This solution achieves O(n) time complexity using a one-pass:
 * - For each element, calculate the complement (target - num).
 * - First, check if the complement exists in the object.
 * - If the complement is found, return the stored index of the complement and the current index.
 * - Otherwise, store the current number and its index in the object for future complement checks.
 *
 * @param {number[]} nums array of available integers
 * @param {number} target total value that two of the available integers must equal
 * @return {number[]} return indices of two numbers (any order) that equal the target value
 */
var twoSum = function (nums, target) {
    let numsMap = {};

    for (let arrIdx = 0; arrIdx < nums.length; arrIdx++) {
        let num = nums[arrIdx];
        let complement = target - num;

        // Look for the target's complementary number in the object
        // If the complement is found in the map we're done
        if( numsMap[complement] != undefined) {
            return [numsMap[complement], arrIdx];
        }

        // Otherwise add it for subsequent complement lookups
        // Use the value as the object index, the value is its index in the original array
        numsMap[num] = arrIdx;
    }

};