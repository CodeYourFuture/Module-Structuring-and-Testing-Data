// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

test("should identify acute angles (0 < angle < 90)", () => {
  expect(getAngleType(10)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89.999)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

test("should identify obtuse angles (90 < angle < 180)", () => {
  expect(getAngleType(110)).toEqual("Obtuse angle");
  expect(getAngleType(145)).toEqual("Obtuse angle");
  expect(getAngleType(169.99)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

test("should identify reflex angles (180 < angle < 360)", () => {
  expect(getAngleType(180.5)).toEqual("Reflex angle");
  expect(getAngleType(270)).toEqual("Reflex angle");
  expect(getAngleType(359.999)).toEqual("Reflex angle");
});

// Sprint-3 rewrite-tests-with jest 1-get-angle-type-test.js tests conducted 
// Testing modified to cover broader scenarios that cover all possible cases.