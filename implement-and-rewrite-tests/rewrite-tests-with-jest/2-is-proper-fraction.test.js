import { isProperFraction } from "../implement/2-is-proper-fraction.js";

test("should return false when the denominator is zero", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});

test("should return true for a proper fraction", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});

test("should return false when the numerator and denominator have equal magnitudes", () => {
  expect(isProperFraction(5, 5)).toEqual(false);
  expect(isProperFraction(-5, 5)).toEqual(false);
  expect(isProperFraction(5, -5)).toEqual(false);
  expect(isProperFraction(-5, -5)).toEqual(false);
});

test("should return false when the numerator's magnitude exceeds the denominator's", () => {
  expect(isProperFraction(7, 3)).toEqual(false);
  expect(isProperFraction(-7, 3)).toEqual(false);
  expect(isProperFraction(7, -3)).toEqual(false);
  expect(isProperFraction(-7, -3)).toEqual(false);
});

test("should return true when numerator is zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
  expect(isProperFraction(0, -5)).toEqual(true);
});

test("should return true when both numerator and denominator are negative and form a proper fraction", () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
});

test("should return true for negative numerator and positive denominator", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});

test("should return true for positive numerator and negative denominator when the numerator is smaller", () => {
  expect(isProperFraction(1, -2)).toEqual(true);
});

test("should return false for negative numerator and positive denominator when the numerator is larger", () => {
  expect(isProperFraction(-3, 2)).toEqual(false);
});

test("should return false for positive numerator and negative denominator when the numerator is larger", () => {
  expect(isProperFraction(3, -2)).toEqual(false);
});
