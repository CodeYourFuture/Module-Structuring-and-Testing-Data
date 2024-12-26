// Implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// 1. Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// 2. Identify Acute Angles:
// When the angle is less than 90 degrees",
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
//the use of else if is to compare one of the conditions 

function getAngleType(angle){

    if (angle === 90) {
      return "Right angle";
    } else if (angle > 0 && angle < 90) {
      return "Acute angle";
    } else if (angle > 90 && angle < 180) {
      return  "Obtuse Angle";
    } else if (angle === 180) {
      return "Straight angle";
    } else if (angle > 180 && angle < 360) {
      return "Reflex Angle";
    }
    return "Invalid angle";
} 



// console.log(getAngleType(90));  // "Right angle"
// console.log(getAngleType(45));  // "Acute angle"
// console.log(getAngleType(135)); // "Obtuse angle"
// console.log(getAngleType(180)); // "Straight angle"
// console.log(getAngleType(270)); // "Reflex angle"
// console.log(getAngleType(-30)); // "Invalid angle"



// ============== test with console.assert() ==================
//these test are more simple to write and read and only return the fail message
//  console.assert(expression, message);
//

console.assert(getAngleType(90) === "Right angle", "Test case failed for Right Angle");
console.assert(getAngleType(40) === "Acute angle", "Test case failed for Acute Angle");
console.assert(getAngleType(135) === "Obtuse Angle", "test case failed for Obtuse Angle");
console.assert(getAngleType(380) === "Straight angle", "Test failed for Straight angle");
console.assert(getAngleType(270) === "Reflex Angle", "Test case Failed for Reflex Angle");
console.assert(getAngleType(-10) === "Invalid angle", "Test case Failed for Invalid angle");
console.assert(getAngleType(400) === "Invalid angle", "Test case Failed for Invalid Angle");

// ============== test with Jest ==================
// These tests are more detailed because we can see what was expected and what went wrong

// Right angle Test
