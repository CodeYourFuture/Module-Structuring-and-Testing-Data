// Implement a function getAngleType
// Build up your function case by case, writing tests as you go
// The first test and case is written for you. The next case has a test, but no code.
// Execute this script in your terminal
// node 1-get-angle-type.js
// The assertion error will tell you what the expected output is
// Write the code to pass the test
// Then, write the next test! :) Go through this process until all the cases are implemented

function getAngleType(angle) {
  if (angle === undefined || isNaN(angle)) {
    return "Invalid angle: Please provide a valid number";
  }
  
  if (angle < 0 || angle > 360) {
    return "Invalid angle: Angle must be between 0 and 360 degrees";
  }
  
  if (angle === 360 || angle === 0) return "Full rotation";
  
  if (angle === 90) return "Right angle";
  if (angle < 90) return "Acute angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  if (angle > 180 && angle < 360) return "Reflex angle";
}

// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Case 1: Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"
const right = getAngleType(90);
assertEquals(right, "Right angle");

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
const acute = getAngleType(45);
assertEquals(acute, "Acute angle");

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
const obtuse = getAngleType(120);
// ====> write your test here, and then add a line to pass the test in the function above
assertEquals(obtuse, "Obtuse angle");
// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
// ====> write your test here, and then add a line to pass the test in the function above
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");
// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
// ====> write your test here, and then add a line to pass the test in the function above
const reflex = getAngleType(270);
assertEquals(reflex, "Reflex angle");

// Case 6: Identify Full Rotation:
// When the angle is exactly 360 degrees or 0 degrees,
// Then the function should return "Full rotation"
const fullRotation = getAngleType(360);
assertEquals(fullRotation, "Full rotation");
const zeroAngle = getAngleType(0);
assertEquals(zeroAngle, "Full rotation");

// Case 7: Handle missing input:
// When no angle is provided,
// Then the function should return an error message
const noAngle = getAngleType();
assertEquals(noAngle, "Invalid angle: Please provide a valid number");

// Case 8: Handle invalid angle values:
// When an angle outside the valid range (0-360 degrees) is provided,
// Then the function should return an error message
const tooBig = getAngleType(361);
assertEquals(tooBig, "Invalid angle: Angle must be between 0 and 360 degrees");
const negative = getAngleType(-10);
assertEquals(negative, "Invalid angle: Angle must be between 0 and 360 degrees");