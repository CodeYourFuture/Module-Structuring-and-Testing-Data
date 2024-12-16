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
    // Check if the angle is exactly 90 degrees
    if (angle === 90) {
        return "Right angle";
    }
    // Check if the angle is less than 90 degrees
    else if (angle < 90) {
        return "Acute angle";
    }
    // Check if the angle is greater than 90 degrees and less than 180 degrees
    else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
        }
    else if (angle === 180) {
        return "Straight angle";
    }
    // Check if the angle is greater than 180 degrees and less than 360 degrees
    else if (angle > 180 && angle < 360) {
        return "Reflex angle";
        }
    //check if the angle is not an angle returns an error
    else {
        return "Invalid angle";
        }
        }
        // Test the function with different angles
        console.log(getAngleType(90)); // Should print "Right angle"
        console.log(getAngleType(45)); // Should print "Acute angle"
        console.log(getAngleType(135)); // Should print "Obtuse angle"
        console.log(getAngleType(180)); // Should print "Straight angle"
        console.log(getAngleType(225)); // Should print "Reflex angle"
        console.log(getAngleType(360)); // Should print "Reflex angle"
        console.log(getAngleType(0)); // Should print "Invalid angle"
        console.log(getAngleType(-45)); // Should print "Invalid angle"
        console.log(getAngleType(45.5)); // Should print "Invalid angle"
        console.log(getAngleType("45")); // Should print "Invalid angle"
        console.log(getAngleType(null)); // Should print "Invalid angle"
        console.log(getAngleType(undefined)); // Should print "Invalid angle"
        console.log(getAngleType(true)); // Should print "Invalid angle"
        console.log(getAngleType(false)); // Should print "Invalid angle"
        console.log(getAngleType(NaN)); // Should print "Invalid angle"
        console.log(getAngleType(Infinity)); // Should print "Invalid angle"
        console.log(getAngleType(-Infinity)); // Should print "Invalid angle"
        console.log(getAngleType("hello")); // Should print "Invalid angle"
        console.log(getAngleType([1, 2, 3])); // Should print "Invalid
        
        