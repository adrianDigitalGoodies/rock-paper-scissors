module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.test.js'], // Change to .ts if using TypeScript
  setupFilesAfterEnv: ['./src/__tests__/setupTests.js'], // Change to .ts if using TypeScript
  // Other Jest configuration options
};
