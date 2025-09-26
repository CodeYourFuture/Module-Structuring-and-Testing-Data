// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(5, 3)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return false for a negative fraction", () => {
  expect(isProperFraction(-2, 3)).toEqual(false);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for equal numerator and denominator", () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});

// We can run this test file using the command `npx jest 1-get-angle-type.test.js`
// in the terminal. Making sure we are in the directory where this file is located.
// If we have Jest installed globally, you can simply run `jest 1-get-angle-type.test.js`
// instead. If you have added a test script to your package.json file, you can also run
// `npm test 1-get-angle-type.test.js` to execute the tests.