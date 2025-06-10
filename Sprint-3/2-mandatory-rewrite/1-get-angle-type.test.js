const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
test("should identify an acute angle (less than 90°)", () => {
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
test("should identify an obtuse angle (greater than 90°)", () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
test("should identify an straight angle (exactly 180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
test("should identify a reflex angle (greater than 180° but less than 360°)", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
});
