import removeDuplicates from "./removeDuplicates";

describe("removeDuplicates function", () => {
  test("should remove duplicates from [1, 1, 2]", () => {
    const nums1: number[] = [1, 1, 2];
    const k1: number = removeDuplicates(nums1);
    expect(k1).toBe(2);
    expect(nums1.slice(0, k1)).toEqual([1, 2]);
  });

  test("should remove duplicates from [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]", () => {
    const nums2: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k2: number = removeDuplicates(nums2);
    expect(k2).toBe(5);
    expect(nums2.slice(0, k2)).toEqual([0, 1, 2, 3, 4]);
  });
});