const getAngleType = require("./1-get-angle-type");

test("should identify Right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("should identify Acute angle (0° < angle < 90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
})


test("should identify Obtuse angle (90° < angle < 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
})

test("should identify Straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
})

test("should identify Reflex angle (180° < angle < 360°)", () => {
  expect(getAngleType(200)).toEqual("Reflex angle");
})