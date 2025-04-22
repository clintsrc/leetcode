/**
 * 27. Remove Element
 *
 * https://leetcode.com/problems/remove-element/
 * Remove all instances of a given value from an array.
 * Updating the values in place.
 * Preserve the order of remaining elements.
 *
 * Efficiency time is O(n) because we iterate through the array once.
 *
 * @param {number[]} nums the array of numbers
 * @param {number} val the number to remove from the array
 * @return {number} the new length of the array
 */
var removeElement = function (nums, val) {
  let k = 0; // the number of elements that do not match the input value
  let i = 0; // The index where the unmatched values are set

    for (let x = 0; x < nums.length; x++) {
      // If the current element is not a match
      if (val !== nums[x]) {
          nums[i++] = nums[x]; // add it back to the new index location
          k++; // update the count of the unmatched elements
      }
  }

  return k; // Return the new length of the array with all val items removed
};


module.exports = removeElement;