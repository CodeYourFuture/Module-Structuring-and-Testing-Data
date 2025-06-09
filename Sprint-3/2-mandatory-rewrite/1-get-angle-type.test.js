const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 2: Identify Acute Angles:
test("should identify acute angles (less than 90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("should identify acute angle (<90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
test("should identify obtuse angles (between 90° and 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("should identify obtuse angle (90° < angle < 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
test("should identify reflex angles (between 180° and 360°)", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});

// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("should identify reflex angle (180° < angle < 360°)", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
});

// Case 6: Identify Invalid Angles:
// When the angle is less than 0 degrees or greater than or equal to 360 degrees,
// Then the function should return "Invalid angle"
test("should identify invalid angle (<0 or >=360)", () => {
  expect(getAngleType(-10)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
});
