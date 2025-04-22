const canCompleteCircuit = require("./gasStation");

describe("canCompleteCircuit", () => {
  test("Example 1: Can complete circuit", () => {
    const gas = [1, 2, 3, 4, 5];
    const cost = [3, 4, 5, 1, 2];
    expect(canCompleteCircuit(gas, cost)).toBe(3);
  });

  test("Example 2: Cannot complete circuit", () => {
    const gas = [2, 3, 4];
    const cost = [3, 4, 3];
    expect(canCompleteCircuit(gas, cost)).toBe(-1);
  });
});

