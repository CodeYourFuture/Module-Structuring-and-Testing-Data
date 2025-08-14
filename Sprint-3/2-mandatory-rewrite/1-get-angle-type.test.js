const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("should identify acute angle (< 90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(10)).toEqual("Acute angle");
  expect(getAngleType(1.23)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("should identify obtuse angle (90° < angle < 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(170)).toEqual("Obtuse angle");
  expect(getAngleType(145.87)).toEqual("Obtuse angle");
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
test("should identify reflex angle (180° < angle < 360°)", () => {
  expect(getAngleType(300)).toEqual("Reflex angle");
  expect(getAngleType(359.999)).toEqual("Reflex angle");
  expect(getAngleType(180.001)).toEqual("Reflex angle");
});

// When the angle is less than or equal to 0 or greater than or equal to 360,
// Then the function should return "Invalid angle

test("should return 'Invalid angle' for angles ≤ 0 or ≥ 360", () => {
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(-12)).toEqual("Invalid angle");
  expect(getAngleType(450)).toEqual("Invalid angle");
});

// Case: Angles near important limits
// These tests make sure the function works correctly
// for values very close to 90° and 360°
test("should return 'Acute angle' for angle just below 90°", () => {
  expect(getAngleType(89.999)).toEqual("Acute angle");
});
test("should return 'Reflex angle' for angle just below 360°", () => {
  expect(getAngleType(359.999999)).toEqual("Reflex angle");
});

// Case: For invalid input
// Should return "Invalid input" for non-numeric or missing values
test("should return 'Invalid input' for invalid", () => {
  expect(getAngleType("Aida")).toEqual("Invalid input");
  expect(getAngleType("")).toEqual("Invalid input");
  expect(getAngleType()).toEqual("Invalid input");
});
