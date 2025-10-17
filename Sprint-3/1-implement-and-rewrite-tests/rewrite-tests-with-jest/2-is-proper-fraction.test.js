// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:

test("it is a Improper Fraction",() =>{
  expect(isProperFraction(3, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
test("it is a Negative Fraction",() =>{
  expect(isProperFraction(-2, 6)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:

test("It is a equal numerator and denominador", () =>{
  expect(isProperFraction( 2, 2)).toEqual(false);
});



// function isProperFraction(numerator, denominator) {
//   if (numerator < denominator) {
//     return true ;
//   }
//   else {
//     return false;
//   }
// }