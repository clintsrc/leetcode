/**
 * 977. Squares of a Sorted Array
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * Given an integer array nums sorted in non-decreasing order, return an
 * array of the squares of each number sorted in non-decreasing order.
 *
 * NOTE: Working from the ends of the input array, right (largest) to left (smallest)
 * to account for negative numbers (-n) that may be larger than squared positives.
 * Fill in the result array from right to left
 *
 * Efficiency: Using two index pointers (high and low) is O(n),
 * avoiding the additional cost of sorting O(n log n).
 *
 * @param {number[]} nums - number array sorted in non-decreasing order
 * @return {number[]} - array of squares for each number sorted in
 *    non-decreasing order
 */
function sortedSquares(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  let result = new Array(nums.length);

  let position = nums.length - 1;  // Start at the last index

  // Working from the ends of the input array, right (largest) to left (smallest)
  // Filling in the result array from right to left
  while (left <= right) {
    // Account for -n**
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[position] = nums[left] ** 2;
      left++;  // Move left pointer forward one position
    } else {
      result[position] = nums[right] ** 2;
      right--;  // Move right pointer back one position
    }
    position--;  // Fill the next position in the result array
  }

  return result;
}

export default sortedSquares;
