const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test ("Should return false for a Improper Fraction", () =>{
  expect(isProperFraction(5,3).toEqual(false));
});

// Case 3: Identify Negative Fractions:

test ("Should return true for a negative fraction", ()=>{
  expect(isProperFraction(-1,2).toEqual(true));
});

// Case 4: Identify Equal Numerator and Denominator:

test ("Should return false for a equal case", ()=>{
  expect(isProperFraction(2,2).toEqual(false));
});
