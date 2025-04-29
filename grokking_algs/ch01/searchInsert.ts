/**
 * 35. Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/
 * Given a sorted array of distinct integers and a target value, return
 * the index if the target is found. If not, return the index where it
 * would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * NOTE: Use a binary search, O(log n) efficiency, and track the low and high
 * indexes. If the current mid value (middle of the array) points is the
 * target value, return mid. Otherwise continue with the search until it
 * does, or else the loop exits. At that point low is one less that the
 * mid -- the insertion point
 * 
 * The given for this problem is that the array is presorted, otherwise the
 * efficiency would be O(log n): nums.sort((a, b) => a - b);
 *
 * @param {number[]} nums - sorted array of distinct integres
 * @param {number} target - target value
 * @return {number} - index for insertion in sorted order
 */
function searchInsert(nums: number[], target: number): number {
  let low = 0; // tracks the insertion point if the number isn't found
  let high = nums.length - 1;

  // Exit the after high was ajusted to be less than low
  while (low <= high) {
    // Find the middle index for the binary search
    let mid = low + Math.floor((high - low) / 2);

    // Found the target, mid points to it
    if (target === nums[mid]) {
      return mid;
    }

    // Otherwise exclude the lower half
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      // or else exclude the upper half
      high = mid - 1;
    }
  }

  // The target was not found and low is the insertion point
  return low;
}

export default searchInsert;
