module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 5,
      lines: 5,
      statements: 5,
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@screens/(.*)': '<rootDir>/src/screens/$1',
    'src/App': '<rootDir>/src/App',
  },
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
};
