const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
// const improperFraction = isProperFraction(5, 2);
// assertEquals(improperFraction, false);
test("should return false for a improper fraction", () => {
  expect(isProperFraction(5,2)).toEqual(false);
});


// Case 3: Identify Negative Fractions:
// const negativeFraction = isProperFraction(-4, 7);
// assertEquals(properFraction, true);
test("should return true for a negative fraction", () => {
  expect(isProperFraction(-4,7)).toEqual(true);
});


// Case 4: Identify Equal Numerator and Denominator:
// const equalFraction = isProperFraction(3, 3);
// assertEquals(improperFraction, false);
test("should return false for a equal numerator and denominator", () => {
  expect(isProperFraction(3,3)).toEqual(false);
});

// const zeroDenominator = isProperFraction(3,0);
// assertEquals(improperFraction, false);
test ("should return false for a zero denominator", () => {
  expect(isProperFraction(3,0)).toEqual(false);
});