const getAngleType = require("./get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("should identify acute angle (< 90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

test("should identify obtuse angle (> 90° but < 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("should identify reflex angle (> 180° but < 360°)", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
});

// handle errors
test("should throw error for invalid input type", () => {
  expect(() => getAngleType("90")).toThrow();
});

test("should throw error for angle >= 360°", () => {
  expect(() => getAngleType(360)).toThrow();
});
