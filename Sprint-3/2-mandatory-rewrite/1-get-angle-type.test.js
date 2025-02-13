const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});


test("this test should identify any Acute Angles (less than 90°)", () => {
  expect(getAngleType(75)).toEqual("Acute angle");
});


test("this test should identify any obtuse Angles (angles between 90 and 180 degrees)", () => {
  expect(getAngleType(125)).toEqual("Obtuse angle");
});


test("should identify any Straight angles(180 degrees)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});



test("this test should identify any Reflex Angles (angles between 180 and 360 degrees)", () => {
  expect(getAngleType(200)).toEqual("Reflex angle");
});