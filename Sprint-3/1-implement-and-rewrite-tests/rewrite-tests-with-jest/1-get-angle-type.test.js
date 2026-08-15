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
test(`should return "Right angle" when (angle === 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 3: Obtuse angles
test(`should return "Obtuse angle" when (90 < angle < 180)`, () => {
  // Test various obtuse angles, including boundary cases
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(135)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

// Case 4: Straight angle
test(`should return "Straight angle" when (angle === 180)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Reflex angles
test(`should return "Reflex angle" when (180 < angle < 360)`, () => {
  // Test various reflex angles, including boundary cases
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});

// Case 6: Invalid angles
test(`should return "Invalid angle" when (angle < 0 || angle > 360)`, () => {
  // Test various invalid angles
  expect(getAngleType(-1)).toEqual("Invalid angle");
  expect(getAngleType(361)).toEqual("Invalid angle");
});

// Case 7: Invalid Non-numeric inputs
test("should return Invalid angle for non-number inputs", () => {
  expect(getAngleType("90")).toEqual("Invalid angle");
  expect(getAngleType("hello")).toEqual("Invalid angle");
});

// Case 8: Decimal angles
test("should handle decimal angles", () => {
  expect(getAngleType(0.5)).toEqual("Acute angle");
  expect(getAngleType(89.5)).toEqual("Acute angle");
  expect(getAngleType(90.5)).toEqual("Obtuse angle");
  expect(getAngleType(179.5)).toEqual("Obtuse angle");
  expect(getAngleType(180.5)).toEqual("Reflex angle");
  expect(getAngleType(359.5)).toEqual("Reflex angle");
});

// Case 9: Very large numbers
test("should return Invalid angle for angles above 360", () => {
  expect(getAngleType(361)).toEqual("Invalid angle");
  expect(getAngleType(720)).toEqual("Invalid angle");
  expect(getAngleType(1000)).toEqual("Invalid angle");
});

// Case 10: Very large negative numbers
test("should return Invalid angle for negative angles", () => {
  expect(getAngleType(-1)).toEqual("Invalid angle");
  expect(getAngleType(-90)).toEqual("Invalid angle");
  expect(getAngleType(-360)).toEqual("Invalid angle");
});

// Case 11: testing boundary angles
test(`should return "Invalid angle" for values just below 0 or just above 360`, () => {
  expect(getAngleType(-0.1)).toEqual("Invalid angle");
  expect(getAngleType(-0.001)).toEqual("Invalid angle");
  expect(getAngleType(360.1)).toEqual("Invalid angle");
  expect(getAngleType(360.001)).toEqual("Invalid angle");
});

test(`should return "Invalid angle" for values equal to 0 or 360`, () => {
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
});
