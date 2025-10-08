// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("should identify acute angle (<90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("should identify obtuse angle (>90° and <180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("should identify reflex angle (>180° and <360°)", () => {
  expect(getAngleType(250)).toEqual("Reflex angle");
});

// Case 6: Identify Full Rotation:
// When the angle is exactly 360 degrees,
// Then the function should return "Full rotation"
test("should identify full rotation (360°)", () => {
  expect(getAngleType(360)).toEqual("Full rotation");
});

// Case 7: input is a number in string
test("should return as usual when input is a number in string", () => {
  expect(getAngleType("90")).toEqual("Right angle");
});

// Case 8: input is not a number
test("should return 'Input should be a number or a number in string' when input is not a number", () => {
  expect(getAngleType("hello")).toEqual(
    "Input should be a number or a number in string"
  );
});

// Case 9: input is less than 0
test("should return 'Angle should be between 0 and 360' when input is less than 0", () => {
  expect(getAngleType(-10)).toEqual("Angle should be between 0 and 360");
});

// Case 10: input is greater than 360
test("should return 'Angle should be between 0 and 360' when input is greater than 360", () => {
  expect(getAngleType(400)).toEqual("Angle should be between 0 and 360");
});

// Case 11: input is exactly 0
test("should identify zero angle (0°)", () => {
  expect(getAngleType(0)).toEqual("Zero angle");
});

// Case 12: input is empty
test("should return 'Input should be a number or a number in string' when input is empty", () => {
  expect(getAngleType()).toEqual(
    "Input should be a number or a number in string"
  );
});

// Case 13: input is null
test("should return 'Input should be a number or a number in string' when input is null", () => {
  expect(getAngleType(null)).toEqual(
    "Input should be a number or a number in string"
  );
});

// Case 14: input is NaN
test("should return 'Input should be a number or a number in string' when input is NaN", () => {
  expect(getAngleType(NaN)).toEqual(
    "Input should be a number or a number in string"
  );
});

// Case 15: input is undefined
test("should return 'Input should be a number or a number in string' when input is undefined", () => {
  expect(getAngleType(undefined)).toEqual(
    "Input should be a number or a number in string"
  );
});

// Case 16: input is an object
test("should return 'Input should be a number or a number in string' when input is an object", () => {
  expect(getAngleType({})).toEqual(
    "Input should be a number or a number in string"
  );
});

// Case 17: input is an array
test("should return 'Input should be a number or a number in string' when input is an array", () => {
  expect(getAngleType([])).toEqual(
    "Input should be a number or a number in string"
  );
});
