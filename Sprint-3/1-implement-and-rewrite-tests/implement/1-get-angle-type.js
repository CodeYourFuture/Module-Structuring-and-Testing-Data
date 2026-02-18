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
  // Returns the type of angle based on the number of degrees given.
  // TODO: Implement this function
  if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
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

// Case 2: Identify Acute Angles
// When the angle is between 0 and 90 degrees,
// then should return "Acute angle"
const acute = getAngleType(45);
assertEquals(acute, "Acute angle");

// Case 3: Identify Obtuse Angles
// When the angle is between 90 and 180 degrees,
// then should return "Obtuse angle"
const obtuse = getAngleType(135);
assertEquals(obtuse, "Obtuse angle");

// Case 4: Identify Straight Angles
// When the angle is exactly 180 degrees,
// then should return "Straight angle"
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");

// Case 5: Identify Reflex Angles
// When the angle is between 180 and 360 degrees,
// then should return "Reflex angle"
const reflex = getAngleType(270);
assertEquals(reflex, "Reflex angle");

// Case 6: Identify Invalid Angles
// When the angle is negative or 360+
// then should return "Invalid angle"

const invalid1 = getAngleType(-30);
assertEquals(invalid1, "Invalid angle");

const invalid2 = getAngleType(400);
assertEquals(invalid2, "Invalid angle");