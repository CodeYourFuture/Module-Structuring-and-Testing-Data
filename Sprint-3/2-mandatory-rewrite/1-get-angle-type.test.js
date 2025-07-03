const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible
test("should identify acute angle (less than 90°)", () => {
  expect(getAngleType(70)).toEqual("Acute angle");
});

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("should indentify obtuse angle (greater than 90°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});



// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

test("should indentify straight angle (180°)", () => {
  expect(getAngleType(120)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("should indentify reflex angle (greater than 180°)", () => {
  expect(getAngleType(260)).toEqual("Reflex Angle");
});