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

// The line below allows us to load the getAngleType function into tests in other files.
module.exports = getAngleType;

// This helper function is written to make our assertions easier to read.
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected "${actualOutput}" to equal "${targetOutput}"`
  );
}

// ==========================================
// TEST SUITE
// ==========================================

console.log("Running tests...");

// 1. Invalid Angles (Lower Bound & Below)
assertEquals(getAngleType(-15), "Invalid angle");
assertEquals(getAngleType(0), "Invalid angle");

// 2. Acute Angles
assertEquals(getAngleType(1), "Acute angle");
assertEquals(getAngleType(45), "Acute angle");
assertEquals(getAngleType(89.9), "Acute angle");

// 3. Right Angle
assertEquals(getAngleType(90), "Right angle");

// 4. Obtuse Angles
assertEquals(getAngleType(90.1), "Obtuse angle");
assertEquals(getAngleType(135), "Obtuse angle");
assertEquals(getAngleType(179.9), "Obtuse angle");

// 5. Straight Angle
assertEquals(getAngleType(180), "Straight angle");

// 6. Reflex Angles
assertEquals(getAngleType(180.1), "Reflex angle");
assertEquals(getAngleType(270), "Reflex angle");
assertEquals(getAngleType(359.9), "Reflex angle");

// 7. Invalid Angles (Upper Bound & Above)
assertEquals(getAngleType(360), "Invalid angle");
assertEquals(getAngleType(400), "Invalid angle");

console.log("All tests completed!");