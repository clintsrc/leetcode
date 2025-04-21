const merge = require('./mergeIntervals');

describe('mergeIntervals', () => {
    test('merges overlapping intervals correctly', () => {
        const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
        const expected = [[1, 6], [8, 10], [15, 18]];
        expect(merge(intervals)).toEqual(expected);
    });

    test('merges intervals with touching edges correctly', () => {
        const intervals = [[1, 4], [4, 5]];
        const expected = [[1, 5]];
        expect(merge(intervals)).toEqual(expected);
    });
});
