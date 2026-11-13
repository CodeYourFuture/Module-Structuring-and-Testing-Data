import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// Zero and complete angles
test("Classifies zero angles", () => {
  assert.equal(getAngleType(0), "Zero angle");
});

test("Classifies complete angles", () => {
  assert.equal(getAngleType(360), "Complete angle");
});

// Acute, right, obtuse and straight angles
test("Classifies acute angles", () => {
  assert.equal(getAngleType(60), "Acute angle");
});

test("Classifies right angles", () => {
  assert.equal(getAngleType(90), "Right angle");
});

test("Classifies obtuse angles", () => {
  assert.equal(getAngleType(120), "Obtuse angle");
});

test("Classifies straight angles", () => {
  assert.equal(getAngleType(180), "Straight angle");
});

// Reflex angles
test("Classifies reflex angles", () => {
  assert.equal(getAngleType(350), "Reflex angle");
});

// Invalid angles
test("Classifies angles greater than 360 as invalid", () => {
  assert.equal(getAngleType(370), "Invalid angle");
});

test("Classifies negative angles as invalid", () => {
  assert.equal(getAngleType(-10), "Invalid angle");
});
