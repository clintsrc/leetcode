// Import the createCounter function
import createCounter from './createCounter';

describe('createCounter', () => {
  test('should start at 10 and increment with each call', () => {
    const counter = createCounter(10);
    expect(counter()).toBe(10);  // First call should return 10
    expect(counter()).toBe(11);  // Second call should return 11
    expect(counter()).toBe(12);  // Third call should return 12
  });

  test('should start at -2 and increment with each call', () => {
    const counter = createCounter(-2);
    expect(counter()).toBe(-2);  // First call should return -2
    expect(counter()).toBe(-1);  // Second call should return -1
    expect(counter()).toBe(0);   // Third call should return 0
    expect(counter()).toBe(1);   // Fourth call should return 1
    expect(counter()).toBe(2);   // Fifth call should return 2
  });
});
