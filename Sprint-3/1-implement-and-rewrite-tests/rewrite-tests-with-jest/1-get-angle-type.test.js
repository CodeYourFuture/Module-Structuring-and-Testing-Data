// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

describe("getAngleType", () => {
  
  // Case 1: Acute angles
  test('should return "Acute angle" when (0 < angle < 90)', () => {
    expect(getAngleType(1)).toBe("Acute angle");
    expect(getAngleType(45)).toBe("Acute angle");
    expect(getAngleType(89.9)).toBe("Acute angle");
  });

  // Case 2: Right angle
  test('should return "Right angle" when angle is exactly 90', () => {
    expect(getAngleType(90)).toBe("Right angle");
  });

  // Case 3: Obtuse angles
  test('should return "Obtuse angle" when (90 < angle < 180)', () => {
    expect(getAngleType(90.1)).toBe("Obtuse angle");
    expect(getAngleType(135)).toBe("Obtuse angle");
    expect(getAngleType(179.9)).toBe("Obtuse angle");
  });

  // Case 4: Straight angle
  test('should return "Straight angle" when angle is exactly 180', () => {
    expect(getAngleType(180)).toBe("Straight angle");
  });

  // Case 5: Reflex angles
  test('should return "Reflex angle" when (180 < angle < 360)', () => {
    expect(getAngleType(180.1)).toBe("Reflex angle");
    expect(getAngleType(270)).toBe("Reflex angle");
    expect(getAngleType(359.9)).toBe("Reflex angle");
  });

  // Case 6: Invalid angles
  test('should return "Invalid angle" for angles outside the 0 to 360 range', () => {
    // Negative angles
    expect(getAngleType(-45)).toBe("Invalid angle");
    
    // Lower boundary
    expect(getAngleType(0)).toBe("Invalid angle");
    
    // Upper boundary
    expect(getAngleType(360)).toBe("Invalid angle");
    
    // Exceeding upper boundary
    expect(getAngleType(361)).toBe("Invalid angle");
  });

});