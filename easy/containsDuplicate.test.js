const containsDuplicate = require('./containsDuplicate'); // Adjust path as needed

describe('containsDuplicate', () => {
  test('returns true when a duplicate exists at the beginning and end [1,2,3,1]', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test('returns false when all elements are distinct [1,2,3,4]', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  test('returns true with multiple duplicates [1,1,1,3,3,4,3,2,4,2]', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
