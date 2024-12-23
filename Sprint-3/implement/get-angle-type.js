// Implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// 1. Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// 2. Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// 3. Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// 4. Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// 5. Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"


// ============================= function getAngleType ===============================

//we use else if to compare one of the conditions 

function getAngleType(angle){

    if (angle === 90) {
      return `${angle} degrees is Right angle`;
    } else if (angle > 0 && angle < 90) {
      return `${angle} degrees is Acute angle`;
    } else if (angle > 90 && angle < 180) {
      return `${angle} degrees is Obtuse Angle`;
    } else if (angle === 180) {
      return `${angle} degrees is Straight angle`;
    } else if (angle > 180 && angle < 360) {
      return `${angle} degrees is Reflex Angle`;
    }
    return `${angle} is an Invalid angle`;
} 

console.log(getAngleType(90));  // "Right angle"
console.log(getAngleType(45));  // "Acute angle"
console.log(getAngleType(135)); // "Obtuse angle"
console.log(getAngleType(180)); // "Straight angle"
console.log(getAngleType(270)); // "Reflex angle"
console.log(getAngleType(-30)); // "Invalid angle"


