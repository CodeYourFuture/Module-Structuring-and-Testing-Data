const getAngleType = require("./1-get-angle-type");


test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});


test("This should identify Acute angles (<90°)", () => {
  expect(getAngleType(20)).toEqual("Acute angle");
});


test("identify an Obtuse angle if an angle is greater than 90 degrees and less than 180 degrees (angle >90° && angle <180°)", () => {
  expect(getAngleType(100)).toEqual("Obtuse angle");
});


test("this will identify an angle that is exactly 180° (angle === 180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});


test("Should identify angle that is greater than 180 degrees and less than 360 degrees (angle >180° && angle <360°)", () => {
  expect(getAngleType(200)).toEqual("Reflex angle");
});