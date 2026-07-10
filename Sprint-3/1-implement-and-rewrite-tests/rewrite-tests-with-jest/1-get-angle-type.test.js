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
test(`should return "Right angle" when (angle === 90 )`, () => {
  expect(getAngleType(90)).toEqual("Right angle");
});
// Case 3: Obtuse angles
test(`should return "Obtuse angles" when (90 < angle < 180)`, () => {
  expect(getAngleType(91)).toEqual("Obtuse angles");
  expect(getAngleType(179)).toEqual("Obtuse angles");
  expect(getAngleType(145)).toEqual("Obtuse angles");
  expect(getAngleType(92)).toEqual("Obtuse angles");
  expect(getAngleType(178)).toEqual("Obtuse angles");
});
// Case 4: Straight angle
test(`should return "Straight angle" when (angle === 180)`, () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});
// Case 5: Reflex angles
test(`should return "Reflex angles" when (180 < angle < 360)`, () => {
  expect(getAngleType(181)).toEqual("Reflex angles");
  expect(getAngleType(190)).toEqual("Reflex angles");
  expect(getAngleType(345)).toEqual("Reflex angles");
  expect(getAngleType(359)).toEqual("Reflex angles");
  expect(getAngleType(277)).toEqual("Reflex angles");
});
// Case 6: Invalid angles
test(`should return "Invalid angles" when (angle )`, () => {
  expect(getAngleType(-60)).toEqual("Invalid angles");
  expect(getAngleType(450)).toEqual("Invalid angles");
  expect(getAngleType(-2)).toEqual("Invalid angles");
  expect(getAngleType(361)).toEqual("Invalid angles");
  expect(getAngleType(890)).toEqual("Invalid angles");
});
