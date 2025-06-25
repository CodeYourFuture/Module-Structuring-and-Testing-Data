const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible
test("should identify acute angle (less than 90°)", () => {
  expect(getAngleType(70)).toEqual("Acute angle");
});

test("should indentify obtuse angle (greater than 90°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

test("should indentify straight angle (180°)", () => {
  expect(getAngleType(120)).toEqual("Straight angle");
});

test("should indentify reflex angle (greater than 180°)", () => {
  expect(getAngleType(260)).toEqual("Reflex Angle");
});
