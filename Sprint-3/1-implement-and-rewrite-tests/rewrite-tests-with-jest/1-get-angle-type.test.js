// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Case 1: Acute angles
test(`should return "Acute angle" when (0 < angle && angle  < 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angle
test (`should return "right angle" when (angle === 90)`,() => {
  // testing various angles ,including boundary cases
  expect( getAngleType(90)).toEqual("right angle");
  });
// Case 3: Obtuse angles
test (`should return "obtuse angle" when (90 < angle && angle < 180)`, () => {
expect(getAngleType(91)).toEqual("obtuse angle");
expect(getAngleType(125)).toEqual("obtuse angle");
expect(getAngleType(172)).toEqual("obtuse angle");
});
// Case 4: Straight angle
test(`should return "straight angle" when (angle === 180)`, () => {
  expect(getAngleType(180)).toEqual("straight angle");
});
// Case 5: Reflex angles\
test(`should return "reflex angle" when (180 < angle && angle < 360)`, () => {
  expect(getAngleType(181)).toEqual("reflex angle");
  expect(getAngleType(270)).toEqual("reflex angle");
  expect(getAngleType(359)).toEqual("reflex angle");
});
// Case 6: Invalid angles
test(`should return "Invalid angle" when (angle < 0 || angle > 360)`, () => {
  expect(getAngleType(-1)).toEqual("Invalid angle");
  expect(getAngleType(361)).toEqual("Invalid angle");
});
