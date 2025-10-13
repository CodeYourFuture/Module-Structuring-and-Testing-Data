// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require('../implement/1-get-angle-type');

test("should identify right angle (90)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("should identify acute angles (less than 90 degrees)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(30)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("should identify obtuse angles (between 90 and 180 degrees)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("should identify straight angle (180 degrees)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("should identify reflex angles (between 180 and 360 degrees)", () => {
  expect(getAngleType(200)).toEqual("Reflex angle");
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});