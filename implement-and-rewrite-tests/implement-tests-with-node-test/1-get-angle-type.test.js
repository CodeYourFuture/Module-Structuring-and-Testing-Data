import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("returns right angle for 90", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});

test("returns invalid angle for 0", () => {
  const result = getAngleType(0);
  assert.equal(result, "Invalid angle");
});

test("returns acute angle for 1", () => {
  const result = getAngleType(1);
  assert.equal(result, "Acute angle");
});

test("returns acute angle for 89", () => {
  const result = getAngleType(89);
  assert.equal(result, "Acute angle");
});
test("returns obtuse angle for 91", () => {
  const result = getAngleType(91);
  assert.equal(result, "Obtuse angle");
});

test("returns obtuse angle for 179", () => {
  const result = getAngleType(179);
  assert.equal(result, "Obtuse angle");
});

test("returns straight angle for 180", () => {
  const result = getAngleType(180);
  assert.equal(result, "Straight angle");
});

test("returns reflex angle for 359", () => {
  const result = getAngleType(359);
  assert.equal(result, "Reflex angle");
});

test("returns invalid angle for 360", () => {
  const result = getAngleType(360);
  assert.equal(result, "Invalid angle");
});

test("returns invalid angle for -1", () => {
  const result = getAngleType(-1);
  assert.equal(result, "Invalid angle");
});
