import argumentsLength from './argumentsLength';

describe('argumentsLength function', () => {
  test('should return correct number of arguments for a single argument [5]', () => {
    expect(argumentsLength(5)).toBe(1);
  });

  test('should return correct number of arguments for an array of [ {}, null, "3" ]', () => {
    expect(argumentsLength({}, null, "3")).toBe(3);
  });
});
