const getAngleType = require("./1-get-angle-type");

test("should return not an angle (angle=0)", () => {
  expect(getAngleType(0)).toEqual("Not an angle");
});

test("should identify right angle (angle=90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible.


test("should identify acute angle (0 < angle < 90)",()=>{
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89.9)).toEqual("Acute angle");
  expect(getAngleType(20.6)).toEqual("Acute angle");
});


test("should identify obtuse angle(90° < angle < 180°)",()=>{
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(90.1)).toEqual("Obtuse angle")
  expect(getAngleType(179.9)).toEqual("Obtuse angle")
});


test("should identify straight angle(angle=180°)",()=>{
  expect(getAngleType(180)).toEqual("Straight angle")
});


test("should identify reflex angle(180<angle<=360)",()=>{
  expect(getAngleType(230)).toEqual("Reflex angle")
  expect(getAngleType(180.1)).toEqual("Reflex angle");
  expect(getAngleType(360)).toEqual("Reflex angle");
});

test("should identify revolutional angle(angle>360)", () => {
  expect(getAngleType(390)).toEqual("Revolutional angle");
});

test("should identify a negative angle(angle<0)", () => {
  expect(getAngleType(-390)).toEqual("Negative angle");
});