import merge from "./mergeSortedArray";

test("Leetcode #88 basic case", () => {
  let nums1 = [1, 2, 3, 0, 0, 0];
  let m = 3;
  let nums2 = [2, 5, 6];
  let n = 3;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});

test("nums2 empty, should do nothing", () => {
  let nums1 = [1];
  let m = 1;
  let nums2 = [];
  let n = 0;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1]);
});

test("nums1 has zeros, nums2 has single item", () => {
  let nums1 = [0];
  let m = 0;
  let nums2 = [1];
  let n = 1;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1]);
});
