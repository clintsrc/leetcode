import searchInsert from './searchInsert';

describe('searchInsert', () => {
  test('inserts target 5 into [1,3,5,6]', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  test('inserts target 2 into [1,3,5,6]', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  test('inserts target 7 into [1,3,5,6]', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });
});
