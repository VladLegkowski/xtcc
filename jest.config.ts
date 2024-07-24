module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': require.resolve('./style-mock.js'),
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
