const getAngleType = require("./1-get-angle-type");

test("Should identify Right angle for exactly 90 degrees", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("Should identify 'Acute angle' for angles less than 90 degrees (e.g., 45°) ", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("Should identify 'Obtuse angle' for angles greater than 90 and less than 180 degrees (e.g., 120°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("should identify 'Straight angle' for angles of exactly 180°", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("should identify 'Reflex angle' for angles greater than 180 and less than 360 degrees (e.g., 200°)", () => {
  expect(getAngleType(200)).toEqual("Reflex angle");
});
