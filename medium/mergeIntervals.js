/**
 * 56. Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals, and return an array of the non-overlapping
 * intervals that cover all the intervals in the input.
 *
 * Sort the array by start time to ensure that overlaps are adjacent.
 * Detect an overlap in the interval range by comparing the left-side
 * interval's end number to the right-side interval's beginning number.
 * If the rhs beginning number is larger then it's outside of the lhs's
 * range and should not be merged.
 *
 * Walk through the array once, merging only if current start <= last
 * merged end. This ensures linear pass post-sort: O(n log n) total.
 *
 * @param {number[][]} intervals array of interval arrays, the interval
 *  arrays have a [start, end] range value
 * @return {number[][]} array non-overlapping intervals covering all the
 *  provided intervals
 */
var merge = function (intervals) {
  let merged = [];

  // Sort intervals by start time (then by end time if they're equal)
  intervals.sort((a, b) => {
      if (a[0] === b[0]) {
          // If the start times are equal, sort by end time
          return a[1] - b[1];
      }
      return a[0] - b[0];
  });

  merged.push(intervals[0]);

  // Iterate over intervals, merging where possible
  for (let interval = 1; interval < intervals.length; interval++) {
      const currentInterval = intervals[interval];

      if (merged[merged.length - 1][1] >= currentInterval[0]) {
          // Do the merge
          // Handle a safe merge so that the end range will always
          // expand and never contract
          merged[merged.length - 1][1] =
              Math.max(merged[merged.length - 1][1], currentInterval[1]);
      } else {
          // Otherwise there's no overlap: add it as-is
          merged.push(intervals[interval]);
      }

  }

  return merged;
};

module.exports = merge;