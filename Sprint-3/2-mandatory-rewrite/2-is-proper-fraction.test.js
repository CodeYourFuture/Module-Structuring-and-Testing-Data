const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should identify improper Fraction", () =>{
  expect(isProperFraction(6, 2)).toEqual(false);
})

// Case 3: Identify Negative Fractions:
test("should identify negative fractions", () => {
  expect(isProperFraction(-2, 7)).toEqual(true);
})
// Case 4: Identify Equal Numerator and Denominator:
test("should identify equal numerator and denominator", () =>{
  expect(isProperFraction(5, 5)).toEqual(false)
})