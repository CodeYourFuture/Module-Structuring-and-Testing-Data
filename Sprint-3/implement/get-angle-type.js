// Implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

function getAngleType(degrees) {
    if (degrees === 90) return "Right angle";
    if (degrees < 90) return "Acute angle";
    if (degrees > 90 && degrees < 180) return "Obtuse angle";
    if (degrees === 180) return "Straight angle";
    if (degrees > 180 && degrees < 360) return "Reflex angle";
    return "Invalid angle";
}

module.exports = getAngleType; 

console.log(getAngleType(359));



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
