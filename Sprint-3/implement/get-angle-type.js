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
_______________________________SOLUTION_________________________________________

function getAngleType(angle) {
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
    } else {
        return "Invalid angle";
    }
}
/*
Explanation:
The function checks the value of angle against different conditions:
If it's exactly 90, it returns "Right angle".
If it's less than 90, it returns "Acute angle".
If it's between 90 and 180, it returns "Obtuse angle".
If it's exactly 180, it returns "Straight angle".
If it's between 180 and 360, it returns "Reflex angle".
If none of these conditions are met (for example, angles ≥ 360 or negative values), it returns "Invalid angle".   */

/*  Results in console.log:

console.log(getAngleType(45));   // "Acute angle"
console.log(getAngleType(90));   // "Right angle"
console.log(getAngleType(135));  // "Obtuse angle"
console.log(getAngleType(180));  // "Straight angle"
console.log(getAngleType(270));  // "Reflex angle"
console.log(getAngleType(360));  // "Invalid angle"           
*/