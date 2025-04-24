import guessNumber from "./guessNumber";

// Mock the guess function
const mockGuess = jest.fn((num: number) => {
  const target = 374;  // Set the target number to be guessed
  if (num === target) return 0;   // Correct guess
  if (num < target) return 1;     // Guess is too low
  return -1;                      // Guess is too high
});

describe("Guessing Game", () => {
  it("should return correct responses for guesses", () => {
    // Testing the binary search behavior with the sequence of guesses

    // When the target number is 374, let's see if the binary search
    // finds it correctly
    expect(guessNumber(mockGuess, 1000)).toBe(374);   // Expect 374 to be found as the correct number
  });
});
