// Implement a function getAngleType

function getAngleType(degrees) {
  if (degrees === 90) {
    return "Right angle";

  } else if (degrees > 0 && degrees < 90) {
    return "Acute angle";

  } else if (degrees > 90 && degrees < 180) {
    return "Obtuse angle";

  } else if (degrees === 180) {
    return "Straight angle";

  } else if (degrees > 180 && degrees < 360) {
    return "Reflex angle";
    
  } else {
    return "Invalid angle"; // Handles cases where degrees are not in the valid range
  }
}

//The angle 75° is a Acute angle.

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
// The angle 5° is a Acute angle

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
//The angle 179° is a Obtuse angle

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
//The angle 180° is a Straight angle.

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

module.exports = getAngleType;
