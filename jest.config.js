module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*/*.stories.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/jest.config.js',
  ],
};
