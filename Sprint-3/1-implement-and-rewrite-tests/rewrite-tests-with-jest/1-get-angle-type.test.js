// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.


// Case 1: Acute angles
test(`should return "Acute angle" when (0 < angle < 90)`,() => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angle
test(`Should return "Right angle" when (angle =90)`,() => {

  expect(getAngleType(90)).toEqual("Right angle");
});
test(`should return "Obtuse angles" when (90< angle <180)`,() => {
  expect(getAngleType(100)).toEqual("Obtuse angle");
});

// Case 3: Obtuse angles
test(`Should return "Straight angles" when (angle =180)`,() => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 4: Straight angle

test(`Should return "Reflex angles" when (angle =250)`,() => {
  expect(getAngleType(250)).toEqual("Reflex angle");
});

// Case 5: Reflex angles

test(`Should return "Invalid angles" when (angle =0)`,() => {
  expect(getAngleType(0)).toEqual("Invalid angle");
});
// Case 6: Invalid angles
