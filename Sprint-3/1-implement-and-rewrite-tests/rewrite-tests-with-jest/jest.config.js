module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8"
};