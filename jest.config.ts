/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/modules/**/useCases/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['text-summary', 'lcov'],
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/modules/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@config/(.*)': '<rootDir>/src/config/$1',
  },
};
