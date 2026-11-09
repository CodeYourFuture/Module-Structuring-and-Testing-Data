import { isProperFraction } from "../implement/2-is-proper-fraction.js";

test("Identifies positive proper fractions", () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 4)).toEqual(true);
});

test("Identifies improper fractions", () => {
  expect(isProperFraction(5, 3)).toEqual(false);
  expect(isProperFraction(4, 4)).toEqual(false);
});

test("Handles zero numerator", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

test("Handles negative numerators", () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(-5, 2)).toEqual(false);
});

test("Handles negative denominators", () => {
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(3, -2)).toEqual(false);
});

test("Handles zero denominator", () => {
  expect(isProperFraction(1, 0)).toEqual(false);
  expect(isProperFraction(0, 0)).toEqual(false);
});
