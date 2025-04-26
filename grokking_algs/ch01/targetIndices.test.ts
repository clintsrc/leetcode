import targetIndices from "./targetIndices";

describe("targetIndices", () => {
  const testCases = [
    {
      nums: [1, 2, 5, 2, 3],
      target: 2,
      expected: [1, 2],
    },
    {
      nums: [1, 2, 5, 2, 3],
      target: 3,
      expected: [3],
    },
    {
      nums: [1, 2, 5, 2, 3],
      target: 5,
      expected: [4],
    },
  ];

  testCases.forEach(({ nums, target, expected }, index) => {
    it(`Test Case #${index + 1}: nums=${JSON.stringify(
      nums
    )}, target=${target}`, () => {
      expect(targetIndices([...nums], target)).toEqual(expected);
    });
  });
});
