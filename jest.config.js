module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testURL: 'http://localhost',
  moduleFileExtensions: ['js', 'jsx', 'svg', 'json', 'node'],
  setupTestFrameworkScriptFile: '<rootDir>/enzyme.config.js',
  collectCoverage: true,
  moduleNameMapper: {
    '@config$': '<rootDir>/config/index.js',
    '@services/(.*)$': '<rootDir>/src/services/$1',
    '@src/(.*)$': '<rootDir>/src/$1',
    '@mocks/(.*)$': '<rootDir>/__mocks__/$1',
  },
};
