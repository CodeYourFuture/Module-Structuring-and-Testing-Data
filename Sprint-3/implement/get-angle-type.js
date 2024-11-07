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
    let angleConverted = Number(angle.slice(0,-8));
    if (angleConverted === 90 ){
        return "Right angle";
    }
    else if (angleConverted === 180) {
        return "Straight angle";
    }
    else if (angleConverted < 90 ) {
        return "Acute angle";
    }
    else if (angleConverted > 90 && angleConverted < 180){
        return "Obtuse angle";
    }
    else if (angleConverted > 180 && angleConverted < 360){
        return "Reflex angle";
    }
}
console.log(getAngleType("120 degrees"));