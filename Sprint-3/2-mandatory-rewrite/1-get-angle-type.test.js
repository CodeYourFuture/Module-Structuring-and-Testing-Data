const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
test("should identify acute angle (< 90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Case 3: Identify Obtuse Angles:
test("should identify obtuse angle (> 90° and < 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Case 4: Identify Straight Angles:
test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Case 5: Identify Reflex Angles:
test("should identify reflex angle (> 180° and < 360°)", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
});
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
