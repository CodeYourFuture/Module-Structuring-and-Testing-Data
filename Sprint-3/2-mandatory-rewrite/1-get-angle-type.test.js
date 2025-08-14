const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
test("should identify acute angle (where angle < 90°)", () => {
  expect(getAngleType(40)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
test("should identify obtuse angle (where angle > 90°)", () => {
  expect(getAngleType(125)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
test("should identify straight angle (where angle = 180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
test("should identify reflex angle (where angle > 180°)", () => {
  expect(getAngleType(225)).toEqual("Reflex angle");
});
