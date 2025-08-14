const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("should identify acute angle (30°)", () => {
  expect(getAngleType(30)).toEqual("Acute angle");
});

test("should identify obtuse angle (130°)", () => {
  expect(getAngleType(130)).toEqual("Obtuse angle");
});

test("should identify right angle (180)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("should identify reflex angle (290°)", () => {
  expect(getAngleType(290)).toEqual("Reflex angle");
});
