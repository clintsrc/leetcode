/**
 * 88. Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/
 * You are given two integer arrays nums1 and nums2,
 * sorted in non-decreasing order, and two integers m
 * and n, representing the number of elements in nums1
 * and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in
 * non-decreasing order.
 *
 * The final sorted array should not be returned by the
 * function, but instead be stored inside the array
 * nums1. To accommodate this, nums1 has a length of
 * m + n, where the first m elements denote the elements
 * that should be merged, and the last n elements are set
 * to 0 and should be ignored. nums2 has a length of n.
 *
 * Follow up: Can you come up with an algorithm that runs in O(m + n) time?
 *
 * NOTES:
 * Time Complexity is O(m + n), linear time:
 *    Each element from nums1 (up to m entries) and nums2 (n entries) is
 *    compared at most once.
 * Space Complexity is O(1), constant:
 *    The nums1 array is provided with the space preallocated
 *
 * @param {number[]} nums1 - preallocated array with elements in sorted order
 *  and additional n elements at the end, n being the size of the second array
 *  to be merged.
 * @param {number} m - the number of elements in nums1, not including the padded
 *  elements at the end.
 * @param {number[]} nums2 - array with elements in sorted order to be merged
 *  into array nums1 in sorted order.
 * @param {number} n - the size of the nums2 array
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
  // pointers move right to left (from end to beginning)
  i = m - 1   // Last *valid* element in nums1
  j = n - 1   // Last element in nums2
  k = m + n - 1 // Last position in nums1

  // Each array's index pointer is only decremented when it is the greater value
  // that has been moved

  while j >= 0
  // Best practice for stability:
  // don't move values in the original array if they're equal
  if i >= 0 && nums1[i] > nums2[j]
    nums1[k] = nums1[i]
      i--
    else
      nums1[k] = nums2[j]
      j--
  k--
*/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1; // Last *valid* element in nums1
  let j = n - 1; // Last element in nums2
  let k = m + n - 1; // Last position in nums1

  while (j >= 0) {
    /* NOTE: Best practice for stability, don't move values in the
     original array if they're equal */
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--; // check the next unevaluated value in nums1
    } else {
      nums1[k] = nums2[j];
      j--; // check the next unevaluated value in nums2
    }
    k--; // point to the next available slot from the end
  }
}

export default merge;
