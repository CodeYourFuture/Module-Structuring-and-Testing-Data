import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

test("returns true when the numerator's magnitude is less than the denominator's", () => {
  assert.equal(isProperFraction(1, 2), true);
  assert.equal(isProperFraction(-1, 2), true);
  assert.equal(isProperFraction(1, -2), true);
  assert.equal(isProperFraction(-1, -2), true);
});

test("returns false when the numerator's magnitude equals or exceeds the denominator's", () => {
  assert.equal(isProperFraction(2, 2), false);
  assert.equal(isProperFraction(-2, 2), false);
  assert.equal(isProperFraction(2, -2), false);
  assert.equal(isProperFraction(-2, -2), false);
  assert.equal(isProperFraction(3, 2), false);
  assert.equal(isProperFraction(-3, 2), false);
  assert.equal(isProperFraction(3, -2), false);
  assert.equal(isProperFraction(-3, -2), false);
});

test("returns true when the numerator is zero and the denominator is nonzero", () => {
  assert.equal(isProperFraction(0, 5), true);
  assert.equal(isProperFraction(0, -5), true);
});

test("returns false when the denominator is zero", () => {
  assert.equal(isProperFraction(1, 0), false);
  assert.equal(isProperFraction(-1, 0), false);
  assert.equal(isProperFraction(0, 0), false);
});
