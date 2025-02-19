//I changed the location of require file to the 1-key-implement folder, 2-is-proper-fraction.js file, because we already have the function in that file.
const isProperFraction = require("../1-key-implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("should return true for a proper fraction", ()=>{
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("should return true for a proper fraction", ()=>{
  expect(isProperFraction(-4, 7)).toEqual(true);
});
// I added this condition to my isProperFraction function:
// else if(numerator< Math.abs(denominator) && denominator<0) return true;
//I want to check with jest now:
test("should return true for a proper fraction", ()=>{
  expect(isProperFraction(4, -7)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
test("should return false for a proper fraction", ()=>{
  expect(isProperFraction(3, 3)).toEqual(false);
});

