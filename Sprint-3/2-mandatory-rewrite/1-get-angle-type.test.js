const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
test("returns 'Acute angle' for angles less than 90 degrees", () {
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
test("returns 'Obtuse angle' for angles greater than 90 degrees and less than 180 degrees", ()  {
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
test("returns 'Straight angle' for angles equal to 180 degrees", ()  {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
test("returns 'Reflex angle' for angles greater than 180 degrees and less than 360 degrees", () {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});
