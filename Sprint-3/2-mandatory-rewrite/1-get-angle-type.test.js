const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

test("Should identify Acute Angles (50°) ", () => {
  expect(getAngleType(50)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("Should identify Obtuse Angle (92°)", () => {
  expect(getAngleType(92)).toEqual("Obtuse angle");
});
// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("Should identify Straight angle (180°) ", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("Should identify Reflex angles (182°)", () => {
  expect(getAngleType(182)).toEqual("Reflex angle");
});
