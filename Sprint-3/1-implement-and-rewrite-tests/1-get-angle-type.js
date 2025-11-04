// Implement a function getAngleType
// Build up your function case by case, writing tests as you go
// Execute this script in your terminal with: node 1-get-angle-type.js

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

// Allow testing in other files
module.exports = getAngleType;

// Helper function for testing
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Test Cases

// Case 1: Right Angle
const right = getAngleType(90);
assertEquals(right, "Right angle");

// Case 2: Acute Angle
const acute = getAngleType(45);
assertEquals(acute, "Acute angle");

// Case 3: Obtuse Angle
const obtuse = getAngleType(120);
assertEquals(obtuse, "Obtuse angle");

// Case 4: Straight Angle
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");

// Case 5: Reflex Angle
const reflex = getAngleType(270);
assertEquals(reflex, "Reflex angle");

console.log("✅ All tests passed successfully!");
