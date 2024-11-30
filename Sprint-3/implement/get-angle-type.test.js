const getAngleType = require("./get-angle-type"); // Import the function

describe("getAngleType function", () => {
  // Test for a right angle
  test('should return "Right angle" for 90 degrees', () => {
    expect(getAngleType(90)).toBe("Right angle");
  });

  // Test for acute angles (between 0 and 90)
  test('should return "Acute angle" for angles between 0 and 90', () => {
    expect(getAngleType(45)).toBe("Acute angle");
    expect(getAngleType(1)).toBe("Acute angle");
  });

  // Test for obtuse angles (between 90 and 180)
  test('should return "Obtuse angle" for angles between 90 and 180', () => {
    expect(getAngleType(120)).toBe("Obtuse angle");
    expect(getAngleType(179)).toBe("Obtuse angle");
  });

  // Test for a straight line
  test('should return "Straight line" for 180 degrees', () => {
    expect(getAngleType(180)).toBe("Straight line");
  });

  // Test for reflex angles (between 180 and 360)
  test('should return "Reflex angle" for angles between 180 and 360', () => {
    expect(getAngleType(270)).toBe("Reflex angle");
    expect(getAngleType(200)).toBe("Reflex angle");
  });

  // Test for angles outside the valid range (0-360 degrees)
  test('should return "Invalid angle" for angles less than 0 or greater than 360', () => {
    expect(getAngleType(-10)).toBe("Invalid angle");
    expect(getAngleType(400)).toBe("Invalid angle");
  });

  // Test for angle of 0 degrees (should be invalid)
  test('should return "Invalid angle" for 0 degrees', () => {
    expect(getAngleType(0)).toBe("Invalid angle");
  });

  // Test for angle of 360 degrees (should be invalid as well)
  test('should return "Invalid angle" for 360 degrees', () => {
    expect(getAngleType(360)).toBe("Invalid angle");
  });
});
