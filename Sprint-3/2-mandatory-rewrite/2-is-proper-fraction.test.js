const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:

test("should return true for an improper fraction", () => {
  expect(isProperFraction(11, 3)).toEqual(false);
  expect(isProperFraction(7, 2)).toEqual(false);
});


// Case 3: Identify Negative Fractions:

test("should return a negative fraction", () => {
  expect(isProperFraction(-11, 3)).toEqual("Negative Fraction");
});
  

// Case 4: Identify Equal Numerator and Denominator:

test("should return a whole number", () => {
  expect(isProperFraction(4, 4)).toEqual("Not really a fraction");
});