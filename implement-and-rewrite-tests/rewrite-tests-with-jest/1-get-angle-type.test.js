import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

test("Returns an acute angle between 0 and 90 degrees", () => {
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

test("Returns a right angle at 90 degrees", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("Returns an obtuse angle between 90 and 180 degrees", () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

test("Returns a straight angle at 180 degrees", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("Returns a reflex angle between 180 and 360 degrees", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});

test("Returns invalid angle outside the valid range", () => {
  expect(getAngleType(-10)).toEqual("Invalid angle");
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
});

// Case 2: Right angle
// Case 3: Obtuse angles
// Case 4: Straight angle
// Case 5: Reflex angles
// Case 6: Invalid angles
