const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});


test("should identify acute angle (<90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
})

test("should identify obtuse angle (90° < angle < 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
})

test("should identify straight angle (angle = 180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
})

test("should identify reflex angle (180° < angle < 360°)", () => {
  expect(getAngleType(250)).toEqual("Reflex angle");
})
