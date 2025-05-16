/**
 * 350. Intersection of Two Arrays II
 *
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * (ref: #349, https://leetcode.com/problems/intersection-of-two-arrays)
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must appear as many times as it shows in both arrays
 * and you may return the result in any order.
 *
 * Follow up:
 * - What if the given array is already sorted? How would you optimize your algorithm?
 *   It would eliminate the need for a hashmap, allowing a more direct 2-pointer
 *   approach instead
 * - What if nums1's size is small compared to nums2's size? Which algorithm is better?
 * - What if elements of nums2 are stored on disk, and the memory is limited such
 *   that you cannot load all elements into the memory at once?
 *
 * NOTE:
 *  Time Complexity: O(n + m), where n = length of nums1, m = length of nums2.
 *    Iterate through nums1 once to build the ledger, then once through nums2
 *    to find intersections.
 *
 * @param {number[]} nums1 - integer arrays
 * @param {number[]} nums2 - integer arrays
 * @return {number[]} - an array of the intersection of nums1 and nums2
 */
/*
* Use a hashmap (ledger) to track frequency of values from the larger array:
* - Key: array value
* - Value: occurrence count
*
* // Store the intersection values in a result array
* let result = []
*
* // Start with the larger array since we're reducing the results to intersections
* for value in nums1
*  ledger[value] += 1;
*
* Process the smaller array to determine the results:
* for value in nums2
*  if ledger[value] > 0  // found a match
*    ledger[value] -= 1; // remove that single intersection from the ledger
*    result.push(value)  // report an intersection
*
* return result
*
*/
function intersect(nums1: number[], nums2: number[]): number[] {
    let ledger = new Map<number, number>(); // Track num1's value frequencies
    let result: number[] = [];  // Stores intersection results

    // Populate ledger with nums1's value counts
    for (let value of nums1) {
        let count = ledger.get(value);

        if (count === undefined) {
            ledger.set(value, 1);
        } else {
            ledger.set(value, count + 1);
        }
    }

    // Iterate over nums2 to find common elements trackd in ledger counts
    for (let value of nums2) {
        let count = ledger.get(value);

        // If the number's count is positive
        if (count !== undefined && count > 0) {
            // Reconcile the count in the ledger
            ledger.set(value, count - 1);
            // Add intersecting value to the results
            result.push(value);
        }
    }

    return result;
}

export default intersect;
