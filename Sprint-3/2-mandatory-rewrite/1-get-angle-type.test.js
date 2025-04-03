const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

test("should identify acute angle (< 90°)", () => {
  expect(getAngleType(40)).toEqual("Acute angle");
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(76)).toEqual("Acute angle");
});

test("should identify obtuse angle (> 90° and < 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(150)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("should identify reflex angle (> 180° and < 360°)", () => {
  expect(getAngleType(200)).toEqual("Reflex angle");
  expect(getAngleType(310)).toEqual("Reflex angle");
  expect(getAngleType(250)).toEqual("Reflex angle");
});
