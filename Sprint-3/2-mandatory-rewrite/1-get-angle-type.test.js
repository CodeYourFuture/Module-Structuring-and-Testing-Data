const getAngleType = require("./1-get-angle-type");

test("When angle is exactly 90 degrees, should identify right angle", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

test("When the angle is less than 90 degrees, should identify acute angle", () => {
  expect(getAngleType(72)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

test("When the angle is greater than 90 degrees and less than 180 degrees, should identify obtuse angle", () => {
  expect(getAngleType(147)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

test("When the angle is exactly 180 degrees, should identify straight angle", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

test("When the angle is greater than 180 degrees and less than 360 degrees, should identify reflex angle", () => {
  expect(getAngleType(246)).toEqual("Reflex angle");
});
