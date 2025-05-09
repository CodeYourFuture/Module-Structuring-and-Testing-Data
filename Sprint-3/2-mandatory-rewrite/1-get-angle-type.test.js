const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

test ("Should identify Acute Angle < 90", () => {
  expect(getAngleType(80)).toEqual("Acute Angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test ("Should identify Obtuse Angle > 90 && <180", () => {
  expect(getAngleType(160)).toEqual("Obtuse Angle");
});

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test ("Should identify Straight Angle=180", () => {
  expect(getAngleType(180)).toEqual("Straight Angle");
});


// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

test ("Should identify Reflex Angle >180 and <360", () => {
  expect(getAngleType(280)).toEqual("Reflex Angle");
});
