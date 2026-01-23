// Implement a function getAngleType
//
// When given an angle in degrees, it should return a string indicating the type of angle:
// - "Acute angle" for angles greater than 0 and less than 90 degrees
// - "Right angle" for exactly 90 degrees
// - "Obtuse angle" for angles greater than 90 degrees and less than 180 degrees
// - "Straight angle" for exactly 180 degrees
// - "Reflex angle" for angles greater than 180 degrees and less than 360 degrees
//
// If the parameter is out of the valid range, the function should return "Invalid angle".

// Assumption: The parameter is a valid number. (You do not need to handle non-numeric inputs.)

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function getAngleType(angle) {
  if (angle === 90) {
    return "Right angle";
  }

  // TODO: Compete the implementation
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

