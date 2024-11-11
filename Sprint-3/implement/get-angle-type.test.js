const { getAngleType } = require("./get-angle-type.js");

test("Right Angles", () => {
  const result = getAngleType(90);

  expect(result).toEqual("Right Angle");
});
it("Straight Angle", () => {
  expect(getAngleType(180)).toBe("Straight Angle");
});
it("it is an Acute Angle", () => {
  expect(getAngleType(1)).toEqual("Acute Angle");
  expect(getAngleType(10)).toEqual("Acute Angle");
  expect(getAngleType(89)).toEqual("Acute Angle");
});
it("it is an Obtuse Angle", () => {
  expect(getAngleType(180)).toEqual("Obtuse Angle");
  expect(getAngleType(91)).toEqual("Obtuse Angle");
  expect(getAngleType(167)).toEqual("Obtuse Angle");
});
it("Angle value is 0 or a Negative number", () => {
  expect(getAngleType(0)).toEqual("Error");
  expect(getAngleType(-1)).toEqual("Error");
  expect(getAngleType(-167)).toEqual("Error");
});
