const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

test("should identify acute angles (less than 90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(10)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

test("should identify obtuse angles (between 90° and 180°)", () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("should identify reflex angles (between 180° and 360°)", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});