const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("should identify as an acute angle (less than 90 degrees)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("should identify as an obtuse angle (greater then 90 degrees and less then 180 degrees)", () => {
  expect(getAngleType(90.38)).toEqual("Obtuse angle");
  expect(getAngleType(179.99)).toEqual("Obtuse angle");
  expect(getAngleType(139)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("should identify as a straight angle (exactly 180 degrees)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
})

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("should identify as a reflex angle (greater than 180 degrees and less than 360 degrees)", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(359.99)).toEqual("Reflex angle");
  expect(getAngleType(270)).toEqual("Reflex angle");
});
