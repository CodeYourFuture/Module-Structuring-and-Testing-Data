import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

test("returns true for -1 and -2", () => {
  assert.equal(isProperFraction(-1, -2), true);
});

test("returns true for zero numerator", () => {
  assert.equal(isProperFraction(0, 5), true);
});

test("returns false for zero denominator", () => {
  assert.equal(isProperFraction(1, 0), false);
});

test("returns true for negative numerator and positive denominator", () => {
  assert.equal(isProperFraction(-1, 2), true);
});

test("returns true for positive numerator and negative denominator", () => {
  assert.equal(isProperFraction(1, -2), true);
});

test("returns false for equal numerator and denominator", () => {
  assert.equal(isProperFraction(-2, 2), false);
});

test("returns false when absolute numerator is greater than denominator", () => {
  assert.equal(isProperFraction(-3, 2), false);
});
