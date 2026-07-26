const getAngleType = require("../implement/1-get-angle-type");

test(`should return "Acute angle" when (0 < angle < 90)`, () => {
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

test(`should return "Right angle" for exactly 90`, () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test(`should return "Obtuse angle" when (90 < angle < 180)`, () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(135)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

test(`should return "Straight angle" for exactly 180`, () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test(`should return "Reflex angle" when (180 < angle < 360)`, () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});

test(`should return "Invalid angle" for angles outside 0-360`, () => {
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
  expect(getAngleType(-10)).toEqual("Invalid angle");
});
