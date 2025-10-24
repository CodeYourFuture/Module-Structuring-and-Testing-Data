// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Acute angle (<90°)
test("should identify acute angles (<90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

// Case 3: Obtuse angle (>90° and <180°)
test("should identify obtuse angles (>90° and <180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

// Case 4: Straight angle (180°)
test("should identify straight angles (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Reflex angle (>180° and <360°)
test("should identify reflex angles (>180° and <=360°)", () => {
  expect(getAngleType(210)).toEqual("Reflex angle");
});
