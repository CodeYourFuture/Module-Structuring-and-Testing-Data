const getAngleType = require("./1-get-angle-type");
describe("getAngleType",()=>{
  test("should identify zero angle (0°)", () => {
  expect(getAngleType(0)).toEqual("Zero angle");
});

  test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("should identify acute angle (12°)", () => {
  expect(getAngleType(12)).toEqual("Acute angle");
});

test("should identify obtuse angle (120°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

 test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

 test("should identify reflex angle (181°)", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
});

 test("should return Invalid angle if the angle is not a number", () => {
  expect(getAngleType("Rahwa")).toEqual("Invalid angle");
});

test("should return Invalid angle if the angle is not between 0 and 360 degree", () => {
  expect(getAngleType(600)).toEqual("Invalid angle");
});
})
