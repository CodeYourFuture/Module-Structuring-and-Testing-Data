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
  expect(getAngleType(95)).not.toEqual("Acute angle");
});
test(`should return "Right angle" when angle is 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(90)).toEqual("Right angle");
  expect(getAngleType(45)).not.toEqual("Right angle");
  expect(getAngleType(99)).not.toEqual("Right angle");
});

test(`should return "Obtuse angle" when (90 < angle < 180)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(90)).not.toEqual("Obtuse angle");
  expect(getAngleType(100)).toEqual("Obtuse angle");
  expect(getAngleType(180)).not.toEqual("Obtuse angle");
  expect(getAngleType(200)).not.toEqual("Obtuse angle");
});

test(`should return "Straight angle" when (angle is 180)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(179)).not.toEqual("Straight angle");
  expect(getAngleType(180)).toEqual("Straight angle");
  expect(getAngleType(181)).not.toEqual("Straight angle");
});
test(`should return "Reflex angle" when (180 < angle < 360)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(179)).not.toEqual("Reflex angle");
  expect(getAngleType(371)).not.toEqual("Reflex angle");
  expect(getAngleType(200)).toEqual("Reflex angle");
});

test(`should return 'Invalid angle' when angle <= 0 or angle >=360 `, () => {
  // Test invalid inputs
  expect(getAngleType(-1)).toEqual("Invalid angle");
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
  expect(getAngleType(400)).toEqual("Invalid angle");
});

// Case 2: Right angle
// Case 3: Obtuse angles
// Case 4: Straight angle
// Case 5: Reflex angles
// Case 6: Invalid angles
