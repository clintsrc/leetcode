import sortedSquares from './sortedSquares';

describe('sortedSquares', () => {
  test('example case 1: [-4,-1,0,3,10]', () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  });

  test('example case 2: [-7,-3,2,3,11]', () => {
    expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  });

  test('all non-negative', () => {
    expect(sortedSquares([0, 1, 2, 3])).toEqual([0, 1, 4, 9]);
  });

  test('all negative', () => {
    expect(sortedSquares([-5, -4, -2])).toEqual([4, 16, 25]);
  });

  test('empty input', () => {
    expect(sortedSquares([])).toEqual([]);
  });
});
