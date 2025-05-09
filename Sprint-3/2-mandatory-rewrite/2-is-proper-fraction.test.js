const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
  expect(isProperFraction(1, 5)).toEqual(true);
  expect(isProperFraction(7, 10)).toEqual(true);
});

// Case 3: Identify Negative Fractions:
test("should return false for an improper fraction", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
  expect(isProperFraction(5, 4)).toEqual(false);
  expect(isProperFraction(10, 2)).toEqual(false);
});


// Case 4: Identify Equal Numerator and Denominator:
test("should return true for a proper fraction with a negative numerator or denominator", () => {
  expect(isProperFraction(-3, 5)).toEqual(true);
  expect(isProperFraction(3, -5)).toEqual(true);
  expect(isProperFraction(-1, 4)).toEqual(true);
});

test("should return false for an improper fraction with a negative numerator or denominator", () => {
  expect(isProperFraction(-5, 3)).toEqual(false);
  expect(isProperFraction(5, -3)).toEqual(false);
  expect(isProperFraction(-7, 7)).toEqual(false);
});

test("should return false for a fraction where numerator equals denominator", () => {
  expect(isProperFraction(4, 4)).toEqual(false);
  expect(isProperFraction(-4, -4)).toEqual(false);
});
