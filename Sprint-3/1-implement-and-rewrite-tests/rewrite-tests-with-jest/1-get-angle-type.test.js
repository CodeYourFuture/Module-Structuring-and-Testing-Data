// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Test various acute angles, including boundary cases
// Case 1: Acute angles
// When angle is greater that 0 and less than 90
test(`should return "Acute angle" when (angle >0 angle < 90)`, () => {
 expect(getAngleType(1)).toEqual("Acute angle");
 expect(getAngleType(45)).toEqual("Acute angle");
 expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angles
// When angle is 90
test(`should return Right angle when (angle = 90)`, () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 3: Obtuse angles
// When angle is greater that 90 and less than 180
test(`should return "Obtuse angle" when (angle >90 & angle <180)`, () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(135)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

// Case 4: Straight angle
// When angle is 180
test(`should return "Straight angle" when (angle = 180)`, () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Reflex angles
// When angle is greater that 180 and less than 360
test(`should return "Reflex angle" when (angle >180 & angle <360)`, () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});

// Case 6: Invalid angles
// When angle is equal to or less than 0 and is equal to or greater than 360
test(`should return "Invalid angle found" when (angle <= 0 or angle >= 360)`, () => {
  expect(getAngleType(0)).toEqual("Invalid angle found");
  expect(getAngleType(-1)).toEqual("Invalid angle found");
  expect(getAngleType(360)).toEqual("Invalid angle found");
  expect(getAngleType(520)).toEqual("Invalid angle found");
});
