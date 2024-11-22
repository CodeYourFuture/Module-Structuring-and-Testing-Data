// getAngleType.test.js
const getAngleType = require("./get-angle-type");

describe("getAngleType", () => {
  test('should return "Right angle" for angle 90', () => {
    expect(getAngleType(90)).toBe("Right angle");
  });

  test('should return "Acute angle" for angle less than 90', () => {
    expect(getAngleType(45)).toBe("Acute angle");
  });

  test('should return "Obtuse angle" for angle between 90 and 180', () => {
    expect(getAngleType(120)).toBe("Obtuse angle");
  });

  test('should return "Straight angle" for angle 180', () => {
    expect(getAngleType(180)).toBe("Straight angle");
  });

  test('should return "Reflex angle" for angle between 180 and 360', () => {
    expect(getAngleType(250)).toBe("Reflex angle");
  });

  test('should return "Invalid angle" for angle greater than or equal to 360', () => {
    expect(getAngleType(360)).toBe("Invalid angle");
    expect(getAngleType(400)).toBe("Invalid angle");
  });

  test('should return "Invalid angle" for negative angle', () => {
    expect(getAngleType(-10)).toBe("Invalid angle");
  });
});
