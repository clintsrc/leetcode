import intersect from "./intersect";

test('Example 1', () => {
  expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
});

test('Example 2', () => {
  const result = intersect([4,9,5], [9,4,9,8,4]);
  expect(result.sort()).toEqual([4,9].sort()); // sort due to possible unordered output
});
