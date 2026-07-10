// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test('should return false when denominator is zero', () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

//[Chun Yan Wong]

test('returns true when numerator absolute value is less than denominator absolute value', () => {
    expect(isProperFraction(1, 2)).toEqual(true);
    expect(isProperFraction(-1, 2)).toEqual(true);
    expect(isProperFraction(3, -5)).toEqual(true);
});

test('returns false when numerator absolute value is equal to denominator absolute value', () => {
    expect(isProperFraction(2, 2)).toEqual(false);
    expect(isProperFraction(-3, 3)).toEqual(false);
});

test('returns false when numerator absolute value is greater than denominator absolute value', () => {
    expect(isProperFraction(5, 2)).toEqual(false);
    expect(isProperFraction(-7, 3)).toEqual(false);
});
