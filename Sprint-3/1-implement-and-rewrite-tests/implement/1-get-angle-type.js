// Implement a function getAngleType
//
// When given an angle in degrees, it should return a string indicating the type of angle:
// - "Acute angle" for angles greater than 0° and less than 90°
// - "Right angle" for exactly 90°
// - "Obtuse angle" for angles greater than 90° and less than 180°
// - "Straight angle" for exactly 180°
// - "Reflex angle" for angles greater than 180° and less than 360°
// - "Invalid angle" for angles outside the valid range.

// Assumption: The parameter is a valid number. (You do not need to handle non-numeric inputs.)

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function getAngleType(angle) {
  // Check invalid angles first
  if (angle <= 0 || angle >= 360) {
    return "Invalid angle";
  }

  // Acute angle
  if (angle > 0 && angle < 90) {
    return "Acute angle";
  }

  // Right angle
  if (angle === 90) {
    return "Right angle";
  }

  // Obtuse angle
  if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  }

  // Straight angle
  if (angle === 180) {
    return "Straight angle";
  }

  // Reflex angle
  if (angle > 180 && angle < 360) {
    return "Reflex angle";
  }
}

// The line below allows us to load the getAngleType function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getAngleType;

// This helper function is written to make our assertions easier to read.
// If the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles
const right = getAngleType(90);
assertEquals(right, "Right angle");

// Acute angle tests
assertEquals(getAngleType(30), "Acute angle");
assertEquals(getAngleType(1), "Acute angle");

// Obtuse angle tests
assertEquals(getAngleType(120), "Obtuse angle");
assertEquals(getAngleType(179), "Obtuse angle");

// Straight angle test
assertEquals(getAngleType(180), "Straight angle");

// Reflex angle tests
assertEquals(getAngleType(270), "Reflex angle");
assertEquals(getAngleType(359), "Reflex angle");

// Invalid angle tests
assertEquals(getAngleType(0), "Invalid angle");
assertEquals(getAngleType(360), "Invalid angle");
assertEquals(getAngleType(-20), "Invalid angle");