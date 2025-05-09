const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});



// Case 2: Identify Improper Fractions:
test("this should return false for a improper fractions", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});


// Case 3: Identify Negative Fractions:
test("this should return true for a negative fractions", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);

});
// Case 4: Identify Equal Numerator and Denominator:
test("this should return false for a equal fractions", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
})
