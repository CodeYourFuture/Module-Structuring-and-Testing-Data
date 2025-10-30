// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
est("should return false for improper fractions", () => {
  const improperFraction = isProperFraction(5, 2);
  expect(improperFraction).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for negative fractions", () => {
  const negativeFraction = isProperFraction(-4, 7);
  expect(negativeFraction).toEqual(true);
});


// Case 4: Identify Equal Numerator and Denominator:
test("should return false for equal numerator and denominator", () => {
  const equalFraction = isProperFraction(3, 3);
  expect(equalFraction).toEqual(false);
});

