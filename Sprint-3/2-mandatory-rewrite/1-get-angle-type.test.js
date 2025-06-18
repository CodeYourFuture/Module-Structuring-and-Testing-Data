const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible


test("should identify acute angle(45°)",()=>{
  expect(getAngleType(45)).toEqual("Acute angle");
});


test("should indentify obtuse angle(120°)",()=>{
  expect(getAngleType(120)).toEqual("Obtuse angle")
});


test("should identify straight angle(180°)",()=>{
  expect(getAngleType(180)).toEqual("Straight angle")
});


test("should identify reflex angle(230°)",()=>{
  expect(getAngleType(230)).toEqual("Reflex angle")
});