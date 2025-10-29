// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
  expect(getAngleType(90.0)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is greater than 0 degrees and less than 90 degrees,
// Then the function should return "Acute angle"
test("should identify acute angle (<90°)", () => {
  expect(getAngleType(50)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89.999)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("should identiify obtuse angle (>90° and <180°)", () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(179.999)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
  expect(getAngleType(180.0)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("should identify reflex angle (>180° and <360°)", () => {
  expect(getAngleType(250)).toEqual("Reflex angle");
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(359.999)).toEqual("Reflex angle");
});

// Case 6: Identify Full Rotation:
// When the angle is exactly 360 degrees,
// Then the function should return "Full rotation"
test("should identify full roatation angle 360°", () => {
  expect(getAngleType(360)).toEqual("Full rotation");
});

// Case 7: Handle Invalid Angles:
// When the angle is negative or greater than 360 or any other data type
// Then the function should return "Invalid angle"
test("should return 'Invalid angle' for negative, >360, or non-numeric values", () => {
  expect(getAngleType(-10)).toEqual("Invalid angle");
  expect(getAngleType(400)).toEqual("Invalid angle");
  expect(getAngleType("abc")).toEqual("Invalid angle");
  expect(getAngleType(true)).toEqual("Invalid angle");
  expect(getAngleType(null)).toEqual("Invalid angle");
  expect(getAngleType(undefined)).toEqual("Invalid angle");
});

// Case 8: Identify Zero Angle:
// When the angle is exactly 0 degrees,
// Then the function should return "Zero angle"
test("should return 'Zero angle' when the input is 0", () => {
  expect(getAngleType(0)).toEqual("Zero angle");
})
