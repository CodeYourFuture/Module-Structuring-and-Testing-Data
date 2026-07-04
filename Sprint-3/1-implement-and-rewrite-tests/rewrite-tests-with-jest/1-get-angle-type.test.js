// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Case 1: Acute angles
test(`should return "Acute angle" when (0 < angle < 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angle
test(`should return "Right angle" when angle === 90`, () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 3: Obtuse angles with boundaries
test(`should return "Obtuse angle" when (90 < angle < 180)`, () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

// Case 4: Straight angle
test(`should return "Straight angle" when angle === 180`, () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Reflex angles
test(`should return "Reflex angle" when (180 < angle < 360)`, () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(250)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});

// Case 6: Invalid angles
test(`should return "Invalid angle" for angles outside 0–360`, () => {
  expect(getAngleType(0)).toEqual("Invalid angle"); // boundary
  expect(getAngleType(-10)).toEqual("Invalid angle");
  expect(getAngleType(400)).toEqual("Invalid angle");
});
// case 7: Full rotation angle for 360 degrees
test(`should return "Full rotation angle" for angles equal to 360`, () => {
  expect(getAngleType(360)).toEqual("Full rotation angle");
});
// case 8: Invalid angles for non-numeric inputs
test(`should return "Invalid angle" for all non-numeric inputs`, () => {
  expect(getAngleType("hello")).toEqual("Invalid angle");
  expect(getAngleType([])).toEqual("Invalid angle");
  expect(getAngleType(null)).toEqual("Invalid angle");
  expect(getAngleType(undefined)).toEqual("Invalid angle");
  expect(getAngleType(NaN)).toEqual("Invalid angle");
  expect(getAngleType(Infinity)).toEqual("Invalid angle");
  expect(getAngleType(-Infinity)).toEqual("Invalid angle");
});
// Case 9: Invalid angles for negative integers
test(`should return "Invalid angle" for negative integers`, () => {
  expect(getAngleType(-10)).toEqual("Invalid angle");
  expect(getAngleType(-90)).toEqual("Invalid angle");
  expect(getAngleType(-360)).toEqual("Invalid angle");
});
