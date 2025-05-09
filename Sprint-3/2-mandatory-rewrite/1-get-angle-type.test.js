const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("should identify acute angle (< 90°)", () => {
  expect(getAngleType(60)).toEqual("Acute angle");
});

test("should identify obtuse angle (> 90° < 120°)", () => {
  expect(getAngleType(111)).toEqual("Obtuse angle");
});

test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("should identify reflex angle (> 180° < 360°)", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
});
