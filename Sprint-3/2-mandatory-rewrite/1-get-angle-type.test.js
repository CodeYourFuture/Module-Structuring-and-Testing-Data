const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("should identify acute angles (less than 90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("should identify obtuse angles (greater than 90° and less than 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("should identify reflex angles (greater than 180° and less than 360°)", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
});

test("should identify full rotation (0° or 360°)", () => {
  expect(getAngleType(360)).toEqual("Full rotation");
  expect(getAngleType(0)).toEqual("Full rotation");
});

test("should handle undefined angle value", () => {
  expect(getAngleType()).toEqual("Invalid angle: Please provide a valid number");
});

test("should handle angle values outside the valid range", () => {
  expect(getAngleType(361)).toEqual("Invalid angle: Angle must be between 0 and 360 degrees");
  expect(getAngleType(-10)).toEqual("Invalid angle: Angle must be between 0 and 360 degrees");
});
