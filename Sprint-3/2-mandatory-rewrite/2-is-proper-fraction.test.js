const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:

test("will identify improper functions", () => {
  expect(isProperFraction(6, 3)).toEqual(false);

});
// Case 3: Identify Negative Fractions:

test("identify negative fractions (-6, 8)", () => {
  expect(isProperFraction(-6, 8)).toEqual(true);  
});
test("identify negative fractions (3, -9)", () => {
  expect(isProperFraction(3, -9)).toEqual(false);  
});
test("identify negative fractions (-10, 1)", () => {
  expect(isProperFraction(-10, 1)).toEqual(true);  
});

// Case 4: Identify Equal Numerator and Denominator:

test("identify equal numerator and denominator", () => {
expect(isProperFraction(5, 5)).toEqual(false);
});
