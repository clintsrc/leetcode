/**
 * 2089. Find Target Indices After Sorting Array
 *
 * https://leetcode.com/problems/find-target-indices-after-sorting-array/
 * You are given a 0-indexed integer array nums and a target element target.
 *
 * A target index is an index i such that nums[i] == target.
 *
 * Return a list of the target indices of nums after sorting nums in
 * non-decreasing order. If there are no target indices, return an empty
 * list. The returned list must be sorted in increasing order.
 *
 * NOTES:
 * Efficiency is O(n log n) for the sort. The binary search O(log n) is more
 * efficient than a linear search O(n) but it won't be noticeable on small sets.
 * Even in larger sets it wouldn't gain very much because the search efficiency
 * is eclipsed by the required sort operation O(n log n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function targetIndices(nums: number[], target: number): number[] {
   let arrTarget: number[] = [];

   // Sort in non-decreasing order
   nums.sort((a, b) => a - b);

   let low = 0;
   let high = nums.length - 1;

   // Start the binary search
   while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      let current = nums[mid];

      /* If the target number is found, verify if it's the first
         occurrence (smallest index) */
      if (target === current) {
         /* Confirm that this is the first occurrence by checking the
            previous element */
         if ( (mid === 0) || (nums[mid - 1] !== target) ) {
            // add the matching element's index to the return array
            arrTarget.push(mid);

            // Now we want to find the remaining matches to the right
            let tempIndex = mid + 1;   // check the next
            while ( (tempIndex < nums.length) && (nums[tempIndex] === target) ) {
               arrTarget.push(tempIndex);
               tempIndex++;
            }

            // Contains indexes of all matches
            return arrTarget;
         } else {
            // Not the first occurrence, move left to keep looking
            high = mid - 1;
         }
      } else if (target < current) {
         // Eliminate the right half
         high = mid - 1;
      } else {
         // Eliminate the left half
         low = mid + 1;
      }
   }

   // No matching values were found if it reaches here.
   return arrTarget;
}


export default targetIndices;