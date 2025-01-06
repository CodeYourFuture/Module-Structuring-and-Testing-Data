// Implement a function getAngleType
    function getAngleType(angle){
        if (angle == 90) {          // Right Angles
            return "Right angle";
    }   if (angle > 0 && angle < 90) {   // Acute Angles
            return "Acute angle";
    }   if (angle > 90 && angle < 180) {  // Obtuse Angle
            return "Obtuse angle";
    }   if (angle == 180) {      // Straight Angle
            return "Straight angle";
    }   if (angle > 180 && angle < 360) {    // Reflex Angle
            return "Reflex angle"
    }   else {
            return "Invalid angle";
    }
}



// 〰️ Example usage:
console.log(getAngleType(90));  // Right angle
console.log(getAngleType(45));  // Acute angle
console.log(getAngleType(135)); // Obtuse angle
console.log(getAngleType(180)); // Straight angle
console.log(getAngleType(270)); // Reflex angle
console.log(getAngleType(360)); // Invalid angle
    
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
