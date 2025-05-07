const isProperFraction = require("./2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:

test("should return false for a improper fraction", () => {
  console.log(isProperFraction(5, 2))
  
  const result = isProperFraction(5, 3)
  console.log(result)
  expect(result).toEqual(false);

});



// Case 3: Identify Negative Fractions:

test("should return true for a negative fraction", () => {

  console.log(isProperFraction(-4, 7))

  const result = isProperFraction (-5, 8)
  expect(result).toEqual(true);

});


// Case 4: Identify Equal Numerator and Denominator:

test("should return true for a Equal Numerator and Denominator", () => {

  console.log(isProperFraction(3, 3))

  const result = isProperFraction (4, 4)
  expect(result).toEqual(false);

});