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
}

module.exports = getAngleType;

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Case 1: Identify Right Angles (90°)
assertEquals(getAngleType(90), "Right angle");

// Case 2: Identify Acute Angles (< 90°)
assertEquals(getAngleType(45), "Acute angle");

// Case 3: Identify Obtuse Angles (> 90° and < 180°)
assertEquals(getAngleType(120), "Obtuse angle");

// Case 4: Identify Straight Angles (180°)
assertEquals(getAngleType(180), "Straight angle");

// Case 5: Identify Reflex Angles (> 180° and < 360°)
assertEquals(getAngleType(270), "Reflex angle");

console.log("✅ All tests passed!");
