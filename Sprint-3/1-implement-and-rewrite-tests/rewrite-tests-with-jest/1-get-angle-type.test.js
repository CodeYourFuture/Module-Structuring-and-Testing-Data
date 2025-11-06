// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
test("should identify acute angle (<90°)", () => {
  // Call the function with an angle less than 90 degrees
  expect(getAngleType(45)).toEqual("Acute angle"); // Function is expected to return "Acute angle"
});

// Case 3: Identify Obtuse Angles:
test("should identify obtuse angle (>90° and <180°)", () => {
  // Call the function with an angle greater than 90 degrees and less than 180 degrees
  expect(getAngleType(120)).toEqual("Obtuse angle"); // Function is expected to return "Obtuse angle"
});

// Case 4: Identify Straight Angles:
test("should identify straight angle (180°)", () => {
  // Call the function with an angle of exactly 180 degrees
  expect(getAngleType(180)).toEqual("Straight angle"); // Function is expected to return "Straight angle"
});

// Case 5: Identify Reflex Angles:
test("should identify reflex angle (>180° and <360°)", () => {
  // Call the function with an angle greater than 180 degrees and less than 360 degrees
  expect(getAngleType(270)).toEqual("Reflex angle"); // Function is expected to return "Reflex angle"
});
