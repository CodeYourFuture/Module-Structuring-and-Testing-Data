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
  if (angle <= 0 || angle >= 360) return "Invalid angle";
  if (angle === 90) return "Right angle";
  if (angle === 180) return "Straight angle";
  if (angle < 90) return "Acute angle";
  if (angle < 180) return "Obtuse angle";
  return "Reflex angle";
}

module.exports = getAngleType;

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

assertEquals(getAngleType(90), "Right angle");
assertEquals(getAngleType(45), "Acute angle");
assertEquals(getAngleType(1), "Acute angle");
assertEquals(getAngleType(89), "Acute angle");
assertEquals(getAngleType(91), "Obtuse angle");
assertEquals(getAngleType(135), "Obtuse angle");
assertEquals(getAngleType(179), "Obtuse angle");
assertEquals(getAngleType(180), "Straight angle");
assertEquals(getAngleType(181), "Reflex angle");
assertEquals(getAngleType(270), "Reflex angle");
assertEquals(getAngleType(359), "Reflex angle");
assertEquals(getAngleType(0), "Invalid angle");
assertEquals(getAngleType(360), "Invalid angle");
assertEquals(getAngleType(-10), "Invalid angle");
assertEquals(getAngleType(400), "Invalid angle");
