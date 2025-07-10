const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible
test("should identify acute angle (< 90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});
// Case 2: identify Acute Angles, When the angle is less than 90 degrees, than the function should return "Acute angle".

test("should identify obtuse angle (> 90° and < 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});
// Case 3: identify Obtuse Angles, When the angle is greater than 90 degrees and less than 180 degrees, than the function should return "Obtuse Angle".

test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});
// Case 4: identify Straight Angles, When the angle is exactly 180 degrees, than the function should return "Straight angle".

test("should identify reflex angle (> 180° and < 360°)", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
});
// Case 5: identify Reflex Angles, When the angle is greater than 180 degrees and less than 360 degrees, the function should return "Reflex Angle".
