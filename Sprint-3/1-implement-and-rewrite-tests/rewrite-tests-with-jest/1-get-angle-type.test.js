// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("should identify acute angle (< 90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(30)).toEqual("Acute angle");
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

test("should identify obtuse angle (> 90° and < 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(135)).toEqual("Obtuse angle");
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("should identify reflex angle (> 180° and < 360°)", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
  expect(getAngleType(200)).toEqual("Reflex angle");
});
