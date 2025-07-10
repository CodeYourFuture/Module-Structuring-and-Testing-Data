const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 2: Identify Acute Angles (less than 90°)
test("should identify acute angles (< 90°)", () => {
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});
// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("acute angle (>9°)", () => {
  expect(getAngleType(89)).toEqual("Acute angle");
});
// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("obtuse angle (91°)", () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
});
// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("straight angle (180°)", () => {
expect(getAngleType(180)).toEqual("Straight angle");
});
// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test( "reflex angle (181°)", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
});