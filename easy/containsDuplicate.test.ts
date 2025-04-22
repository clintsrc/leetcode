import containsDuplicate from './containsDuplicate';

describe("containsDuplicate (TS)", () => {
  test("should return true if duplicates exist", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test("should return false if no duplicates", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });
});
