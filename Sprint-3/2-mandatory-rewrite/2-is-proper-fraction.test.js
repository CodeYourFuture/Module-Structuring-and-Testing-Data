const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
const improperFraction = isProperFraction(5, 2);
assertEquals(improperFraction, false);

// Case 3: Identify Negative Fractions:
const negativeFraction = isProperFraction(-4, 7);
assertEquals(negativeFraction, true);

// Case 4: Identify Equal Numerator and Denominator:
const equalFraction = isProperFraction(3, 3);
assertEquals(equalFraction, false);