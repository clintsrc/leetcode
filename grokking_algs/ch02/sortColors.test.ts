import sortColors from "./sortColors";

describe('LeetCode 75 - sortColors', () => {
  test('sorts [2,0,2,1,1,0] into [0,0,1,1,2,2]', () => {
    const nums = [2, 0, 2, 1, 1, 0];
    sortColors(nums); // in-place sort
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test('sorts [2,0,1] into [0,1,2]', () => {
    const nums = [2, 0, 1];
    sortColors(nums); // in-place sort
    expect(nums).toEqual([0, 1, 2]);
  });
});
