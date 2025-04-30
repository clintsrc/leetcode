import search from "./binarySearch";

describe("704. Binary Search", () => {
  it("should return index of target 9 in array [-1,0,3,5,9,12]", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 9;
    const expected = 4;
    expect(search(nums, target)).toBe(expected);
  });

  it("should return -1 when target 2 is not in array [-1,0,3,5,9,12]", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 2;
    const expected = -1;
    expect(search(nums, target)).toBe(expected);
  });
});
