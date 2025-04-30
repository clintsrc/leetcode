/**
 * 278. First Bad Version
 *
 * https://leetcode.com/problems/first-bad-version/
 * You are a product manager and currently leading a team to develop a
 * new product. Unfortunately, the latest version of your product fails
 * the quality check. Since each version is developed based on the previous
 * version, all the versions after a bad version are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the
 * first bad one, which causes all the following ones to be bad.
 *
 * You are given an API bool isBadVersion(version) which returns whether
 * version is bad. Implement a function to find the first bad version. You
 * should minimize the number of calls to the API.
 *
 * NOTES:
 * low advances past all known good versions
 * high retreats before the first known bad version
 * When the two cross, low is the smallest version that must be bad
 *
 * O(log n) for the binary search
 *
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let high = n;
        let low = 1;

        // find the first bad version
        // high will eventually be the last known good version
        // low will eventually point to the first bad version
        while (low <= high) {
            // binary search to find the middle version
            let mid = low + Math.floor((high - low) / 2);
            // is mid a bad version
            const bGuess = isBadVersion(mid);

            if (bGuess) {
                // mid is bad: the first bad mid could be mid or earlier, eliminate the upper half
                high = mid -1;
            } else {
                // mid is good: the first bad version must be after mid, eliminate the bottom half
                low = mid + 1;
            }
        }

        // loop exits when low passes high: low is the first bad version at that point
        return low;
    }
};

export default solution;
