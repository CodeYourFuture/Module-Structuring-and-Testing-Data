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
    // Check if the input is a valid number
    if (typeof angle !== "number") {
        throw new Error("Angle should be a number"); // Throw an error instead of returning a string
    }

    // Check for valid angle range (0 to 360)
    if (angle < 0 || angle >= 360) {
        throw new Error("Angle should be between 0 and 360 degrees");
    }

    // Determine the type of angle
    if (angle === 90) {
        return "Right angle";
    } else if (angle < 90) {
        return "Acute angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle"; 
    } else if (angle > 180 && angle < 360) {
        return "Reflex angle"; 
    }
    
    return "Invalid angle";
}
console.log(getAngleType(45));   // Result: "Acute angle"
console.log(getAngleType(90));   // Result: "Right angle"
console.log(getAngleType(120));  // Result: "Obtuse angle"
//console.log(getAngleType("abc"));



   
module.exports = getAngleType
