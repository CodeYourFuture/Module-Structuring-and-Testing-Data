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

// solution

function getAngleType(angle) {
    //to get the right amgle
    if (angle === 90) {
        return "Right angle";
        //to get the acute angle
    } else if (angle < 90) {
        return "Acute angle";
        // to get the obtuse angle
    } else if (90 < angle < 180) {
        return "Obtuse angle";
        // to get the stright line, or angle
    } else if (angle === 180) {
        return "Straight angle";
        // to get the reflex angle
    } else if (angle > 180 && angle < 360) {
        return "Reflex angle";
        // else return invalid imput or angle
    } else {
        return "Invalid angle";
    }
}

module.exports = getAngleType;





