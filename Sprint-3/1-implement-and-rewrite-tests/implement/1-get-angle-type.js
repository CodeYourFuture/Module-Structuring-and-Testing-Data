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
  // TODO: Implement this function
  let returnAngle;
  if (angle > 0 && angle < 90) {
    returnAngle = "Acute";
  } else if (angle === 90) {
    returnAngle = "Right";
  } else if (angle > 90 && angle < 180) {
    returnAngle = "Obtuse";
  } else if (angle === 180) {
    returnAngle = "Straight";
  } else if (angle > 180 && angle < 360) {
    returnAngle = "Reflex";
  } else {
    returnAngle = "Invalid";
  }
  return `${returnAngle} angle`;
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
const acute = getAngleType(75);
const obtuse = getAngleType(150);
const straight = getAngleType(180);
const reflex = getAngleType(340);
let invalid = getAngleType(0);
invalid = getAngleType(360);
invalid = getAngleType(-2);

assertEquals(right, "Right angle");
assertEquals(acute, "Acute angle");
assertEquals(obtuse, "Obtuse angle");
assertEquals(straight, "Straight angle");
assertEquals(reflex, "Reflex angle");
assertEquals(invalid, "Invalid angle");
