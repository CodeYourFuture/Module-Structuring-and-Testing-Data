// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");


// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Special case: numerator is zero
test(`should return true when numerator is zero `, () => {
  expect(isProperFraction(0, 2)).toEqual(true);
});

// numerator and denominator are both zero
test(`should return false when numerator and denominator are both zero`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

// negative numerator and positive denominator
test(`should return true when numerator is negative and denominator is positive`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});

// positive numerator, negative denominator
test(` should return false when numerator is positive and denominator is negative`, () => {
  expect(isProperFraction(1, -2)).toEqual(true);
})

//negative numerator and denominator where numerator is smaller than denominator
test(`should return true when numerator is negative and denominator is negative and numerator is smaller than denominator`, () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
});

//negative numerator and denominator where numerator is bigger than denominator
test(`should return false when numerator is negative and denominator is negative and numerator is bigger than denominator`, () => {
  expect(isProperFraction(-2, -1)).toEqual(false);
});

//positive numerator and denominator where numerator is smaller
test(`should return true when numerator is smaller`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

// positive numerator and denominator, numerator is larger
test(`should return false when numerator is larger`, () => {
  expect(isProperFraction(4, 2)).toEqual(false);
});

// equal numerator and denominator
test(`should return false when numerator and denominator are equal`, () => {
  expect(isProperFraction(4, 4)).toEqual(false);
});

// numerator and denominator are both floating point numbers, numerator is smaller
test(`should return true when numerator and denominator are both floating point numbers and numerator is smaller`, () => {
  expect(isProperFraction(1.5, 2.5)).toEqual(true);
});

// numerator and denominator are both floating point numbers, numerator is larger
test(`should return false when numerator and denominator are both floating point numbers and numerator is larger`, () => {
  expect(isProperFraction(2.5, 1.5)).toEqual(false);
});
