const isProperFraction = require("./is-proper-fraction");

// Proper Fraction check:
//where the numerator is less than the denominator 2/3
//proper fraction= true
test(`return true if numerator < denominator `, function () {
  const numerator = 8;
  const denominator = 12;
  const currentInput = isProperFraction(numerator, denominator);
  const targetInput = true;
  expect(currentInput).toBe(targetInput);
});

// Improper Fraction check:
//where the numerator is greater than or  5/2
//improper fraction = false
test(`return false if numerator >= denominator `, function () {
  const numerator = 5;
  const denominator = 2;
  const currentInput = isProperFraction(numerator, denominator);
  const targetInput = false;
  expect(currentInput).toBe(targetInput);
});

// Zero Denominator check:
// Error (Denominator cannot be zero
//it's not a valid fractio

test(`return error if denominator is zero`, function () {
  const numerator = 3;
  const denominator = 0;
  const targetInput = "Denominator can not be zero";
  expect(() => {
    isProperFraction(numerator, denominator);
  }).toThrow(targetInput);
});

// Negative Fraction check:
//proper fraction because the absolute
//function should return true -4/7

test(`return true if numerator <0 && >= 1`, function () {
  const numerator = -4;
  const denominator = 7;
  const currentInput = isProperFraction(numerator, denominator);
  const targetInput = true;
});

// Equal Numerator and Denominator check:
//is not a proper fraction because the numerator is
// equal to the denominator.
//The function should return false

test(`return false is numerator and demominator are the same`, function () {
  const numerator = 3;
  const denominator = 3;
  const currentInput = isProperFraction(numerator, denominator);
  const targetInput = false;
});

test(`return false is numerator and demominator are the same`, function () {
  const numerator = 5;
  const denominator = 5;
  const currentInput = isProperFraction(numerator, denominator);
  const targetInput = false;
});


