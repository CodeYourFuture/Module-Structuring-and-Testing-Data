/**
 * Original file
 *
// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
*/
const getAngleType = require("../implement/1-get-angle-type");

/**
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

// Implement a function getAngleType
//
// When given an angle in degrees, it should return a string indicating the type of angle:
// - "Acute angle" for angles greater than 0° and less than 90°
// - "Right angle" for exactly 90°
// - "Obtuse angle" for angles greater than 90° and less than 180°
// - "Straight angle" for exactly 180°
// - "Reflex angle" for angles greater than 180° and less than 360°
// - "Invalid angle" for angles outside the valid range.

// Assumption: The parameter is a valid number. (You do not need to handle non-numeric inputs.)

function getAngleType(angle) {
  // Check for invalid angles first (angles ≤ 0 or ≥ 360)
  if (angle <= 0 || angle >= 360) {
    return "Invalid angle";
  }

  // Check for specific angle types
  if (angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else { // angle > 180 and < 360 (already validated above)
    return "Reflex angle";
  }
}

// The line below allows us to load the getAngleType function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getAngleType;

// This helper function is written to make our assertions easier to read.
// If the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
*
*
// TODO: Write tests to cover all cases, including boundary and invalid cases.
*
* End of original file
*/

// Implementation 

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

console.log("Running getAngleType tests...\n");

// Test Case 1: Acute angles (greater than 0° and less than 90°)
console.log("Testing Acute angles:");
assertEquals(getAngleType(1), "Acute angle");
assertEquals(getAngleType(45), "Acute angle");
assertEquals(getAngleType(89), "Acute angle");
assertEquals(getAngleType(89.9), "Acute angle");

// Test Case 2: Right angle (exactly 90°)
console.log("\nTesting Right angle:");
assertEquals(getAngleType(90), "Right angle");
assertEquals(getAngleType(90.0), "Right angle");

// Test Case 3: Obtuse angles (greater than 90° and less than 180°)
console.log("\nTesting Obtuse angles:");
assertEquals(getAngleType(91), "Obtuse angle");
assertEquals(getAngleType(135), "Obtuse angle");
assertEquals(getAngleType(179), "Obtuse angle");
assertEquals(getAngleType(179.9), "Obtuse angle");

// Test Case 4: Straight angle (exactly 180°)
console.log("\nTesting Straight angle:");
assertEquals(getAngleType(180), "Straight angle");
assertEquals(getAngleType(180.0), "Straight angle");

// Test Case 5: Reflex angles (greater than 180° and less than 360°)
console.log("\nTesting Reflex angles:");
assertEquals(getAngleType(181), "Reflex angle");
assertEquals(getAngleType(270), "Reflex angle");
assertEquals(getAngleType(359), "Reflex angle");
assertEquals(getAngleType(359.9), "Reflex angle");

// Test Case 6: Invalid angles (≤ 0° or ≥ 360°)
console.log("\nTesting Invalid angles:");
// Zero and negative angles
assertEquals(getAngleType(0), "Invalid angle");
assertEquals(getAngleType(-1), "Invalid angle");
assertEquals(getAngleType(-45), "Invalid angle");
assertEquals(getAngleType(-90), "Invalid angle");
assertEquals(getAngleType(-180), "Invalid angle");
assertEquals(getAngleType(-360), "Invalid angle");

// Angles ≥ 360
assertEquals(getAngleType(360), "Invalid angle");
assertEquals(getAngleType(361), "Invalid angle");
assertEquals(getAngleType(400), "Invalid angle");
assertEquals(getAngleType(720), "Invalid angle");

console.log("\nAll tests completed!");

describe('getAngleType', () => {
  test('should return "Acute angle" for angles between 0 and 90 exclusive', () => {
    expect(getAngleType(1)).toBe("Acute angle");
    expect(getAngleType(45)).toBe("Acute angle");
    expect(getAngleType(89)).toBe("Acute angle");
    expect(getAngleType(89.9)).toBe("Acute angle");
  });

  test('should return "Right angle" for exactly 90 degrees', () => {
    expect(getAngleType(90)).toBe("Right angle");
    expect(getAngleType(90.0)).toBe("Right angle");
  });

  test('should return "Obtuse angle" for angles between 90 and 180 exclusive', () => {
    expect(getAngleType(91)).toBe("Obtuse angle");
    expect(getAngleType(135)).toBe("Obtuse angle");
    expect(getAngleType(179)).toBe("Obtuse angle");
    expect(getAngleType(179.9)).toBe("Obtuse angle");
  });

  test('should return "Straight angle" for exactly 180 degrees', () => {
    expect(getAngleType(180)).toBe("Straight angle");
    expect(getAngleType(180.0)).toBe("Straight angle");
  });

  test('should return "Reflex angle" for angles between 180 and 360 exclusive', () => {
    expect(getAngleType(181)).toBe("Reflex angle");
    expect(getAngleType(270)).toBe("Reflex angle");
    expect(getAngleType(359)).toBe("Reflex angle");
    expect(getAngleType(359.9)).toBe("Reflex angle");
  });

  test('should return "Invalid angle" for angles ≤ 0 or ≥ 360', () => {
    // Zero and negative angles
    expect(getAngleType(0)).toBe("Invalid angle");
    expect(getAngleType(-1)).toBe("Invalid angle");
    expect(getAngleType(-45)).toBe("Invalid angle");
    expect(getAngleType(-90)).toBe("Invalid angle");
    expect(getAngleType(-180)).toBe("Invalid angle");
    expect(getAngleType(-360)).toBe("Invalid angle");

    // Angles ≥ 360
    expect(getAngleType(360)).toBe("Invalid angle");
    expect(getAngleType(361)).toBe("Invalid angle");
    expect(getAngleType(400)).toBe("Invalid angle");
    expect(getAngleType(720)).toBe("Invalid angle");
  });
});

