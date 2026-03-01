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

//Question:
// What about 360 angle that is a valid angle and called complete angle should I include that as well?
function getAngleType(angle) {
  // TODO: Implement this function
  if (angle <= 0 || angle >= 360) {
    return "Invalid angle";
  } else if (angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else if (angle < 360) {
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
let angle = getAngleType(0);
assertEquals(angle, "Invalid angle");
angle = getAngleType(-78);
assertEquals(angle, "Invalid angle");
angle = getAngleType(1);
assertEquals(angle, "Acute angle");
angle = getAngleType(90);
assertEquals(angle, "Right angle");
angle = getAngleType(91);
assertEquals(angle, "Obtuse angle");
angle = getAngleType(180);
assertEquals(angle, "Straight angle");
angle = getAngleType(181);
assertEquals(angle, "Reflex angle");
angle = getAngleType(360);
assertEquals(angle, "Invalid angle");
angle = getAngleType(45671);
assertEquals(angle, "Invalid angle");
angle = getAngleType(0.5);
assertEquals(angle, "Acute angle");
angle = getAngleType(90.0098);
assertEquals(angle, "Obtuse angle");
angle = getAngleType(-0.0001);
assertEquals(angle, "Invalid angle");
