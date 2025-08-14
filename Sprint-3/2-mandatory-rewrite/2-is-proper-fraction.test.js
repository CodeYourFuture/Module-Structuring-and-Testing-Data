const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:

// Case 3: Identify Negative Fractions:
<<<<<<< HEAD
test("should return false for a negative fraction", () => {
  expect(isProperFraction(-2, 3)).toEqual(false);
  expect(isProperFraction(2, -3)).toEqual(false);
  expect(isProperFraction(-2, -3)).toEqual(false); // consider your spec on this one
});



=======
>>>>>>> parent of 01079c2 (Update Sprint-3\2\2-is-proper-fraction.js)

// Case 4: Identify Equal Numerator and Denominator:
