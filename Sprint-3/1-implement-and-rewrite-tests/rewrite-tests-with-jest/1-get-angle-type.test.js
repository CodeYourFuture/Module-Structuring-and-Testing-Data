// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

test("should identify acute angle(45°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

test("should identify obtuse angle(120°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

test("should identify straight angle(180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("should identify reflex angle(260°)", () => {
  expect(getAngleType(260)).toEqual("Reflex angle");
});
