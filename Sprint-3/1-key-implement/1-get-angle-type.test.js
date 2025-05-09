const getAngleType = require("./1-get-angle-type");

test("Identifies Right Angle", () => {
  expect(getAngleType(90)).toBe("Right angle");
});

test("Identifies Acute Angle", () => {
  expect(getAngleType(45)).toBe("Acute angle");
});

test("Identifies Obtuse Angle", () => {
  expect(getAngleType(120)).toBe("Obtuse angle");
});

test("Identifies Straight Angle", () => {
  expect(getAngleType(180)).toBe("Straight angle");
});

test("Identifies Reflex Angle", () => {
  expect(getAngleType(270)).toBe("Reflex angle");
});

test("Handles invalid angles", () => {
  expect(getAngleType(360)).toBeUndefined();
});
