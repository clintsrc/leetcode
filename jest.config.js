module.exports = {
  preset: 'ts-jest',           // Use ts-jest preset
  testEnvironment: 'node',     // Node.js environment
  moduleFileExtensions: ['js', 'ts'],  // Tell Jest to process js and ts files
  transform: {
    '^.+\\.ts$': 'ts-jest',    // Transform .ts files using ts-jest
  },
};