const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
test("should identify acute angle (e.g., 45°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
test("should identify obtuse angle (e.g., 120°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
test("should identify reflex angle (e.g., 181°)", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
});
