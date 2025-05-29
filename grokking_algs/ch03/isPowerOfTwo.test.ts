import isPowerOfTwo from "./isPowerOfTwo";

describe("isPowerOfTwo", () => {
  it("returns true for 1 (2^0)", () => {
    expect(isPowerOfTwo(1)).toBe(true);
  });

  it("returns true for 16 (2^4)", () => {
    expect(isPowerOfTwo(16)).toBe(true);
  });

  it("returns false for 3 (not a power of 2)", () => {
    expect(isPowerOfTwo(3)).toBe(false);
  });
});
