// Implement a function getAngleType
// Build up your function case by case, writing tests as you go
// The first test and case is written for you. The next case has a test, but no code.
// Execute this script in your terminal
// node 1-get-angle-type.js
// The assertion error will tell you what the expected output is
// Write the code to pass the test
// Then, write the next test! :) Go through this process until all the cases are implemented

function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  if (angle < 90) return "Acute angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  if (angle > 180 && angle < 360) return "Reflex angle";
  // If the angle is not in any of the above categories, we can return a default value
  return "Unknown angle type";
  // Note: This function currently does not handle angles outside the range of 0 to 360 degrees.
  // If you want to handle angles greater than or equal to 360 degrees, you can modify the function accordingly.
  // For example, you could add a case for angles greater than or equal to 360 degrees.
  // If you want to handle negative angles, you can also add a case for that.
  // If you want to handle angles that are not numbers, you can add a case for that as well.
  // You can also add a case for angles that are not numbers, such as strings or null values.
  // If you want to handle angles that are not numbers, you can add a case for that as well.

  // read to the end, complete line 36, then pass your test here
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
//console.log("Right angle test passed!");
// ====> write your test here, and then add a line to pass the test in the function above
console.log(getAngleType(90)); // This should log "Right angle"

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
const acute = getAngleType(45);
assertEquals(acute, "Acute angle");
console.log(getAngleType(45)); // This should log "Acute angle"

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
const obtuse = getAngleType(120);
assertEquals(obtuse, "Obtuse angle");
console.log(getAngleType(120)); // This should log "Obtuse angle"
// ====> write your test here, and then add a line to pass the test in the function above

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");
console.log(getAngleType(180)); // This should log "Straight angle"

// ====> write your test here, and then add a line to pass the test in the function above

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
const reflex = getAngleType(270);
assertEquals(reflex, "Reflex angle");
console.log(getAngleType(270)); // This should log "Reflex angle"

// ====> write your test here, and then add a line to pass the test in the function above
const above_reflex = getAngleType(380);
assertEquals(above_reflex, "Unknown angle type");
console.log(getAngleType(380)); // This should log "unknown angle type"
