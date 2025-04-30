import firstBadVersionFactory from './firstBadVersion';

// The factory returns a version of firstBadVersion that uses the mock isBadVersion API
describe("First Bad Version", () => {
  it("should return 4 when n = 5 and first bad version is 4", () => {
    const firstBad = 4;
    const n = 5;

    const isBadVersion = (version: number): boolean => version >= firstBad;
    const firstBadVersion = firstBadVersionFactory(isBadVersion);

    expect(firstBadVersion(n)).toBe(4);
  });

  it("should return 1 when n = 1 and first bad version is 1", () => {
    const firstBad = 1;
    const n = 1;

    const isBadVersion = (version: number): boolean => version >= firstBad;
    const firstBadVersion = firstBadVersionFactory(isBadVersion);

    expect(firstBadVersion(n)).toBe(1);
  });
});
