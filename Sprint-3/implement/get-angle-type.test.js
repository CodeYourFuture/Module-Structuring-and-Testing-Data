// Implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:
function getAngleType(angle) {
  if (angle < 0 || angle >= 360) {
    return "Invalid angle";
  }
  // Identify Right Angles:
  // When the angle is exactly 90 degrees,
  // Then the function should return "Right angle"
  else if (angle === 90) {
    return "Right angle";
    // Identify Acute Angles:
    // When the angle is less than 90 degrees,
    // Then the function should return "Acute angle"
  } else if (angle < 90) {
    return "Acute angle";
    // Identify Obtuse Angles:
    // When the angle is greater than 90 degrees and less than 180 degrees,
    // Then the function should return "Obtuse angle"
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";

    // Identify Straight Angles:
    // When the angle is exactly 180 degrees,
    // Then the function should return "Straight angle"
  } else if (angle === 180) {
    return "Straight angle";

    // Identify Reflex Angles:
    // When the angle is greater than 180 degrees and less than 360 degrees,
    // Then the function should return "Reflex angle"
  } else if (angle > 180 && angle < 360) {
    return "Reflex angle";
  } else {
    return "Invalid angle";
  }
}

describe("getAngleType", () => {
  test('should return "Right angle" for 90 degrees', () => {
    expect(getAngleType(90)).toBe("Right angle");
  });

  test('should return "Acute angle" for angles less than 90 degrees', () => {
    expect(getAngleType(45)).toBe("Acute angle");
    expect(getAngleType(1)).toBe("Acute angle");
  });

  test('should return "Obtuse angle" for angles greater than 90 and less than 180 degrees', () => {
    expect(getAngleType(91)).toBe("Obtuse angle");
    expect(getAngleType(150)).toBe("Obtuse angle");
  });

  test('should return "Straight angle" for 180 degrees', () => {
    expect(getAngleType(180)).toBe("Straight angle");
  });

  test('should return "Reflex angle" for angles greater than 180 and less than 360 degrees', () => {
    expect(getAngleType(181)).toBe("Reflex angle");
    expect(getAngleType(270)).toBe("Reflex angle");
  });

  test('should return "Invalid angle" for angles 360 or above', () => {
    expect(getAngleType(360)).toBe("Invalid angle");
    expect(getAngleType(400)).toBe("Invalid angle");
  });

  test('should return "Invalid angle" for negative angles', () => {
    expect(getAngleType(-10)).toBe("Invalid angle");
  });
});
