// This statement loads the getAngleType function you wrote in the implement directory.
const getAngleType = require("../implement/1-get-angle-type");

test("returns acute angle for angles between 0 and 90", () => {
  expect(getAngleType(1)).toEqual("acute angle");
  expect(getAngleType(45)).toEqual("acute angle");
  expect(getAngleType(89)).toEqual("acute angle");
});

test("returns right angle for 90 degrees", () => {
  expect(getAngleType(90)).toEqual("right angle");
});

test("returns obtuse angle for angles between 90 and 180", () => {
  expect(getAngleType(91)).toEqual("obtuse angle");
  expect(getAngleType(125)).toEqual("obtuse angle");
  expect(getAngleType(172)).toEqual("obtuse angle");
});

test("returns straight angle for 180 degrees", () => {
  expect(getAngleType(180)).toEqual("straight angle");
});

test("returns reflex angle for angles between 180 and 360", () => {
  expect(getAngleType(181)).toEqual("reflex angle");
  expect(getAngleType(270)).toEqual("reflex angle");
  expect(getAngleType(359)).toEqual("reflex angle");
});

test("returns invalid angle for angles outside the valid range", () => {
  expect(getAngleType(-1)).toEqual("invalid angle");
  expect(getAngleType(361)).toEqual("invalid angle");
});