const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

test("should identify acute angle (25°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

test("should identify obtuse angle (155°)", () => {
  expect(getAngleType(135)).toEqual("Obtuse angle");
});

test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("should identify reflex angle (200°)", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
});