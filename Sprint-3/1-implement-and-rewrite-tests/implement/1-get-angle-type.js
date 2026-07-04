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
  switch (true) {
    case angle == 90:
      return "Right angle";
    case 0 < angle && angle < 90:
      return "Acute angle";
    case 90 < angle && angle < 180:
      return "Obtuse angle";
    case angle == 180:
      return "Straight angle";
    case 180 < angle && angle < 360:
      return "Reflex angle";
    case angle > 360 || angle < 0 || angle == 0:
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

const acute1 = getAngleType(1);
assertEquals(acute1, "Acute angle");

const acute45 = getAngleType(45);
assertEquals(acute45, "Acute angle");

const acute89 = getAngleType(89);
assertEquals(acute89, "Acute angle");

const right = getAngleType(90);
assertEquals(right, "Right angle");

const obtuse91 = getAngleType(91);
assertEquals(obtuse91, "Obtuse angle");

const obtuse140 = getAngleType(140);
assertEquals(obtuse140, "Obtuse angle");

const obtuse179 = getAngleType(179);
assertEquals(obtuse179, "Obtuse angle");

const straight = getAngleType(180);
assertEquals(straight, "Straight angle");

const reflex181 = getAngleType(181);
assertEquals(reflex181, "Reflex angle");

const reflex250 = getAngleType(250);
assertEquals(reflex250, "Reflex angle");

const reflex359 = getAngleType(359);
assertEquals(reflex359, "Reflex angle");

const zero = getAngleType(0);
assertEquals(zero, "Invalid angle");

const invalid = getAngleType(400);
assertEquals(invalid, "Invalid angle");

const negative = getAngleType(-4);
assertEquals(zero, "Invalid angle");
