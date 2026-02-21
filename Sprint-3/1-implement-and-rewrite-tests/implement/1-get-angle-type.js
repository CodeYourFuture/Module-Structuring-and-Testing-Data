// Implement a function getAngleType
//
// When given an angle in degrees, it should return a string indicating the type of angle:
// - "Acute angle" for angles greater than 0° and less than 90°
// - "Right angle" for exactly 90°
// - "Obtuse angle" for angles greater than 90° and less than 180°
// - "Straight angle" for exactly 180°
// - "Reflex angle" for angles greater than 180° and less than 360°
// - "Invalid angle" for angles outside the valid range.

// Assumption: The parameter is a valid number.

function getAngleType(angle) {
  if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else if (angle > 180 && angle < 360) {
    return "Reflex angle";
  } else {
    return "Invalid angle";
  }
}

module.exports = getAngleType;

// Helper function for testing
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// ======================
// Tests
// ======================

// Acute angles
assertEquals(getAngleType(45), "Acute angle");
assertEquals(getAngleType(1), "Acute angle");
assertEquals(getAngleType(89), "Acute angle");

// Right angle
assertEquals(getAngleType(90), "Right angle");

// Obtuse angles
assertEquals(getAngleType(120), "Obtuse angle");
assertEquals(getAngleType(179), "Obtuse angle");
assertEquals(getAngleType(91), "Obtuse angle");

// Straight angle
assertEquals(getAngleType(180), "Straight angle");

// Reflex angles
assertEquals(getAngleType(200), "Reflex angle");
assertEquals(getAngleType(359), "Reflex angle");
assertEquals(getAngleType(181), "Reflex angle");

// Invalid angles
assertEquals(getAngleType(0), "Invalid angle");
assertEquals(getAngleType(360), "Invalid angle");
assertEquals(getAngleType(-10), "Invalid angle");
assertEquals(getAngleType(400), "Invalid angle");

console.log("All tests passed!");
