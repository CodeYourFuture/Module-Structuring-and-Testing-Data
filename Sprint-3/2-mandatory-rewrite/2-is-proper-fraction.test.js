const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
test("shuold return false for not a proper fractino",()=>{
  expect(isProperFraction(3,1)).toEqual(false)
})

// Case 3: Identify Negative Fractions:
test("shuold return true for a proper fractino",()=>{
  expect(isProperFraction(-4,7)).toEqual(true)
})
// Case 4: Identify Equal Numerator and Denominator:
test("shuold return false for not a proper fractino",()=>{
  expect(isProperFraction(3, 0)).toEqual(false)
})
