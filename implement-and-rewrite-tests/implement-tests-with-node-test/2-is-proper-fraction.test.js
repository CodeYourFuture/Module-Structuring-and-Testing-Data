import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

test("Identifies basic proper fractions", () => {
  assert.equal(isProperFraction(1, 2), true);
  assert.equal(isProperFraction(3, 4), true);
});

test("Identifies improper fractions", () => {
  assert.equal(isProperFraction(5, 3), false);
  assert.equal(isProperFraction(4, 4), false);
});

test("Handles zero numerator", () => {
  assert.equal(isProperFraction(0, 5), true);
});

test("Handles negative numerators", () => {
  assert.equal(isProperFraction(-1, 2), true);
  assert.equal(isProperFraction(-5, 2), false);
});

test("Handles negative denominators", () => {
  assert.equal(isProperFraction(1, -2), true);
  assert.equal(isProperFraction(3, -2), false);
});

test("Handles zero denominator", () => {
  assert.equal(isProperFraction(1, 0), false);
  assert.equal(isProperFraction(0, 0), false);
});
