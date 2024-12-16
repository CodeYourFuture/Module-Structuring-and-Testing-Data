const getAngleType = require("./get-angle-type");

test('When the angle is less than 90 degrees, the function should return "Acute angle"', () => {
  expect(getAngleType(69)).toBe("Acute angle");
});

test('When the angle is exactly 90 degrees, the function should return "Right angle"', () => {
  expect(getAngleType(90)).toBe("Right angle");
});

test('When the angle is greater than 90 degrees and less than 180 degrees, the function should return "Obtuse angle"', () => {
  expect(getAngleType(169)).toBe("Obtuse angle");
});

test('When the angle is exactly 180 degrees, the function should return "Straight angle"', () => {
  expect(getAngleType(180)).toBe("Straight angle");
});

test("Return Reflex angle for angles between 180 and 360 degrees", () => {
  expect(getAngleType(246)).toBe("Reflex angle");
});
