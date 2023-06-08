const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  testMatch: ['**/+(*.)+(spec|test).+(ts|tsx|js|jsx)?(x)'],
  // transform: {
  //   '^.+\\.(ts|js|html)$': 'ts-jest',
  // },
  collectCoverage: true,
  collectCoverageFrom: ['./apps', './libs'],
  // resolver: '@nx/jest/plugins/resolver',
  // moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['lcov', 'json'],
};
