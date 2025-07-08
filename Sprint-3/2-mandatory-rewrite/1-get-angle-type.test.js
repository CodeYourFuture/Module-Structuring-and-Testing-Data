const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("should identify acute angle when: 0 < angle < 90", () => {
  expect(getAngleType(0.001)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89.999)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("should identify obtuse angle when: 90 < angle < 180", () => {
  expect(getAngleType(90.001)).toEqual("Obtuse angle");
  expect(getAngleType(125)).toEqual("Obtuse angle");
  expect(getAngleType(179.999)).toEqual("Obtuse angle");
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
test("should identify reflex angle when: 180 < angle < 360", () => {
  expect(getAngleType(300)).toEqual("Reflex angle");
  expect(getAngleType(359.999)).toEqual("Reflex angle");
  expect(getAngleType(180.001)).toEqual("Reflex angle");
});
