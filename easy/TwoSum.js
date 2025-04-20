/**
 * 1. Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the two
 * numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use
 *  the same element twice.
 * You can return the answer in any order.
 *
 * @param {number[]} nums array of available integers
 * @param {number} target total value that two of the available integers must equal
 * @return {number[]} return indices of two numbers (any order) that equal the target
 *  value
 */
var twoSum = function (nums, target) {
  let numsMap = {};

  for (let arrIdx = 0; arrIdx < nums.length; arrIdx++) {
      let num = nums[arrIdx];  // current number in the array


      if (!numsMap[num]) {
          // initialize an empty array for the first instance of the value
          numsMap[num] = [];
      }

      numsMap[num].push(arrIdx);
  }

  // look for the target's complementary number in the hash map
  for (let hashIdx = 0; hashIdx < nums.length; hashIdx++) {
      let num = nums[hashIdx];
      let complement = target - num;

      // Look for the complement's index and filter out the current (duplicate) index
      //  number
      if (numsMap[complement] && numsMap[complement][0] !== hashIdx) {
          return [hashIdx, numsMap[complement][0]];
      }
  }

};