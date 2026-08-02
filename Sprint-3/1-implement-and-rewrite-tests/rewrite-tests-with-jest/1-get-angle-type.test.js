// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

// Case 1: Acute angles
test(`should return "Acute angle" when angle is greater than 0 or angle is less than 90')`, () => {
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Obtuse angle
test(`should return "obtuse angle" when angle is greater than 90 but less than 180 `, () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});
// Case 3: Right angles
test(`should return "Right angle" when (angle === 90)`, () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 4: Straight angle
test(`should return "Straight angle" when (angle === 180)`, () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});
// Case 5: Reflex angles
test(`should return "Reflect angle" when angle is greater than 180 but less than 360))`, () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});
// Case 6: Invalid angles
test(`"should return 'Invalid angle' when angle is 0, 360, less than 0, or greater than 360")`, () => {
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
  expect(getAngleType(-1)).toEqual("Invalid angle");
});
