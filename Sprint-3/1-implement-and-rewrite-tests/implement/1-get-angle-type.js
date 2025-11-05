function getAngleType(angle) {
  if (angle === 90) {
    return "Right angle";
  }
  if (angle < 90) {
    return "Acute angle";
  }
  if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  }
  if (angle === 180) {
    return "Straight angle";
  }
  if (angle > 180 && angle < 360) {
    return "Reflex angle";
  }
}
// The line below allows us to load the getAngleType function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getAngleType;

// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

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
assertEquals(obtuse, "Obtuse angle");

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
const reflex = getAngleType(250);
assertEquals(reflex, "Reflex angle");
