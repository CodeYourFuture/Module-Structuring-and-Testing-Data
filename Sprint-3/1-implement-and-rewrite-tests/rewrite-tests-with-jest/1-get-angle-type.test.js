/**
// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Case 1: Acute angles
test(`should return "Acute angle" when (0 < angle < 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angle
// Case 3: Obtuse angles
// Case 4: Straight angle
// Case 5: Reflex angles
// Case 6: Invalid angles
*
*/

// Written by me @Carlos Abreu

const getAngleType = require("../implement/1-get-angle-type");
describe('getAngleType function', () => {
  
  describe('Acute angles', () => {
    test('should return "Acute angle" for angles between 0 and 90 degrees', () => {
      expect(getAngleType(45)).toBe("Acute angle");
      expect(getAngleType(1)).toBe("Acute angle");
      expect(getAngleType(89)).toBe("Acute angle");
    });
  });

  describe('Right angle', () => {
    test('should return "Right angle" for exactly 90 degrees', () => {
      expect(getAngleType(90)).toBe("Right angle");
    });
  });

  describe('Obtuse angles', () => {
    test('should return "Obtuse angle" for angles between 90 and 180 degrees', () => {
      expect(getAngleType(95)).toBe("Obtuse angle");
      expect(getAngleType(135)).toBe("Obtuse angle");
      expect(getAngleType(179)).toBe("Obtuse angle");
    });
  });

  describe('Straight angle', () => {
    test('should return "Straight angle" for exactly 180 degrees', () => {
      expect(getAngleType(180)).toBe("Straight angle");
    });
  });

  describe('Reflex angles', () => {
    test('should return "Reflex angle" for angles between 180 and 360 degrees', () => {
      expect(getAngleType(185)).toBe("Reflex angle");
      expect(getAngleType(270)).toBe("Reflex angle");
      expect(getAngleType(359)).toBe("Reflex angle");
    });
  });

  describe('Invalid angles', () => {
    test('should return "Invalid angle" for angles less than or equal to 0', () => {
      expect(getAngleType(0)).toBe("Invalid angle");
      expect(getAngleType(-45)).toBe("Invalid angle");
      expect(getAngleType(-90)).toBe("Invalid angle");
      expect(getAngleType(-180)).toBe("Invalid angle");
    });

    test('should return "Invalid angle" for angles greater than or equal to 360', () => {
      expect(getAngleType(360)).toBe("Invalid angle");
      expect(getAngleType(365)).toBe("Invalid angle");
      expect(getAngleType(400)).toBe("Invalid angle");
      expect(getAngleType(720)).toBe("Invalid angle");
    });
  });

});

