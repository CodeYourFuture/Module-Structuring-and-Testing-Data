// Implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

function getAngleType(angle) {
  switch (true) {
    case angle === 90:
      return "Right angle";
    case angle < 90 && angle >= 0:
      return "Acute angle";
    case angle === 180:
      return "Straight angle";
    case angle > 90 && angle < 180:
      return "Obtuse angle";
    case angle > 180 && angle < 360:
      return "Reflex angle";
    default:
      return "Invalid angle";
  }
}

// Test assertions moved outside the function
console.assert(getAngleType(90) === "Right angle", "90 degrees should be a right angle");
console.assert(getAngleType(45) === "Acute angle", "45 degrees should be an acute angle");
console.assert(getAngleType(180) === "Straight angle", "180 degrees should be a straight angle");
console.assert(getAngleType(120) === "Obtuse angle", "120 degrees should be an obtuse angle");
console.assert(getAngleType(270) === "Reflex angle", "270 degrees should be a reflex angle");
console.assert(getAngleType(400) === "Invalid angle", "400 degrees should be invalid");
console.assert(getAngleType(-45) === "Invalid angle", "Negative angles should be invalid"); 

module.exports = {getAngleType};