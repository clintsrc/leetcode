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
 */
function containsDuplicate(nums) {
    var setNums = new Set();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        // If the current value was found
        if (setNums.has(num)) {
            // It's a duplicate
            return true;
        }
        else {
            // Add it
            setNums.add(num);
        }
    }
    return false;
}
module.exports = containsDuplicate;
