/**
 * 75. Sort Colors
 *
 * https://leetcode.com/problems/sort-colors/
 * Given an array nums with n objects colored red, white, or blue, sort
 * them in-place so that objects of the same color are adjacent, with the
 * colors in the order red, white, and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the color red,
 * white, and blue, respectively.
 *
 * You must solve this problem without using the library's sort function.
 *
 * NOTES:
 * Efficiency is O(n), linear time.
 * Uses the Dutch National Flag algorithm to sort in-place.
 * Uses three pointers (low, mid, high) that partition the array.
 * More efficient than a selection sort's O(n²) by avoiding repeated scanning.
 * This algorithm works for tristate values specifically
 *
 * @param {number[]} nums - array with colors red = 0, white = 1, or blue = 2
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let low = 0;  // the red == 0 partition
  let mid = 0;  // the pointer that sorts to the three partitions, its default is white == 1
  let high = nums.length - 1; // the blue == 1 partition

  // stop after after the mid pointer moves past the end
  while (mid <= high) {
    // Target 0 == red partition, left-hand side
    if (nums[mid] === 0) {
      swap(nums, mid, low);  // swap lhs position
      low++;  // advance lhs position
      mid++;  // evaluate next element
    } else if (nums[mid] === 2) {
      // Target 2 == blue partition, right-hand side
      swap(nums, mid, high);  // swap rhs position
      high--; // move to the next
      /* Do not advance to the next element: we need to
      evaluate what was swapped on the next round */
    } else {
      // Target 1 == white middle partition
      // Value is already in the middle partition
      mid++;  // proceed to the next element
    }
  }

  // no return value: the array is sorted in-place
}

/**
 * swap
 *
 * Swap array elements: this can be more efficient that using destructuring
 * @param {number[]} arr - array of numbers
 * @param {number} i - index of the first element to swap
 * @param {number} j - index of the second element to swap
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap(arr: number[], i: number, j: number) {
  let temp: number = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}

export default sortColors;
