module.exports = {
  displayName: "Jest Tests",
  testMatch: ["**/rewrite-tests-with-jest/**/*.test.js"],
  collectCoverage: true,
  coverageDirectory: "coverage/jest-tests",
  collectCoverageFrom: [
    "Sprint-3/1-implement-and-rewrite-tests/implement/*.js",
    "!Sprint-3/1-implement-and-rewrite-tests/implement/*.test.js",
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
  ],
  coverageReporters: ["text", "lcov", "json-summary"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
