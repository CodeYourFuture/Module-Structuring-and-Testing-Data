const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:

const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false); // improper fraction is the fraction where the numerator is greater than or equal to the denominator.

// Case 3: Identify Negative Fractions:

const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true); // negative fraction is the fraction where the absolute value of the numerator is less than the denominator.

// Case 4: Identify Equal Numerator and Denominator:

const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false); // equal fraction is the fraction where the numerator is equal to the denominator.
