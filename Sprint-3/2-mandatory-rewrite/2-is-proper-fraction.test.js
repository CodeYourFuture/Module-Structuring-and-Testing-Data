const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

//we can write the functions that we expect to out true using .toBeTruthy()
test("should return true for a proper fraction", () => {
  expect(isProperFraction(7, 11)).toBeTruthy();
});

// Case 2: Identify Improper Fractions:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(7, 3)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a negative fraction", () => {
  expect(isProperFraction(-2, 3)).toEqual(true);
});

//This type of case that outputs true can also use .toBeTruthy()
test("should return true for a negative fraction", () => {
  expect(isProperFraction(-4, 9)).toBeTruthy();
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false if numerator and denominator are equal", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});