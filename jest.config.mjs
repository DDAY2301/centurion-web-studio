/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/app', '<rootDir>/components', '<rootDir>/lib'],
  testMatch: ['**/*.test.tsx', '**/*.test.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: ['components/**/*.{ts,tsx}', 'lib/**/*.{ts,tsx}', '!**/*.d.ts'],
};
export default config;
