// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Case 1: Acute angles
test(`should return "Acute angle" when ( angle > 0 and angle < 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angle
test(`should return "Right angle" when angle exactly equals 90`, () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 3: Obtuse angles
describe(`should return "obtuse angle" when obtuse > 90 and obtuse < 180`, () => {
  expect(getAngleType(95)).toEqual("Obtuse angle");
  expect(getAngleType(99)).toEqual("Obtuse angle");
  expect(getAngleType(105)).toEqual("Obtuse angle");
});
// Case 4: Straight angle

test(`should return "straight angle" when straight is equals 180`, () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});
// Case 5: Reflex angles
test(`should return "reflex angle" if angle is more than 180 and less than 360`, () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(191)).toEqual("Reflex angle");
  expect(getAngleType(211)).toEqual("Reflex angle");
});

// tes(`should return "reflex angle" when straight is  `);
// Case 6: Invalid angles
test(`should return "invalid angle" if any of them don't match`, () => {
  expect(getAngleType(385)).toEqual("Invalid");
  expect(getAngleType(430)).toEqual("Invalid");
  expect(getAngleType(390)).toEqual("Invalid");
});
