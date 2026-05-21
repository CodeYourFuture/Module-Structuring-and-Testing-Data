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
  // Check invalid first - angles must be between 0 and 360 (exclusive)
  if (angle <= 0 || angle >= 360) return "Invalid angle";
  // Check exact values before ranges to avoid overlap
  if (angle === 90) return "Right angle";
  if (angle === 180) return "Straight angle";
  // Now check ranges
  if (angle < 90) return "Acute angle";
  if (angle < 180) return "Obtuse angle";
  return "Reflex angle"; // anything left must be between 180 and 360, which is reflex
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
// // Right angle: only one possible value
const right = getAngleType(90);
assertEquals(right, "Right angle");

// Acute angles: test a boundary (just above 0), a normal case, and a boundary (just below 90)
const acute1 = getAngleType(1);
assertEquals(acute1, "Acute angle"); // boundary: just above 0

const acute2 = getAngleType(45);
assertEquals(acute2, "Acute angle"); // normal acute angle

const acute3 = getAngleType(89);
assertEquals(acute3, "Acute angle"); // boundary: just below 90

// Obtuse angles: boundary just above 90, normal, boundary just below 180
const obtuse1 = getAngleType(91);
assertEquals(obtuse1, "Obtuse angle"); // boundary: just above 90

const obtuse2 = getAngleType(120);
assertEquals(obtuse2, "Obtuse angle"); // normal obtuse angle

const obtuse3 = getAngleType(179);
assertEquals(obtuse3, "Obtuse angle"); // boundary: just below 180

// Straight angle: only one possible value
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");

// Reflex angles: boundary just above 180, normal, boundary just below 360
const reflex1 = getAngleType(181);
assertEquals(reflex1, "Reflex angle"); // boundary: just above 180

const reflex2 = getAngleType(270);
assertEquals(reflex2, "Reflex angle"); // normal reflex angle

const reflex3 = getAngleType(359);
assertEquals(reflex3, "Reflex angle"); // boundary: just below 360

// Invalid angles: exactly 0, exactly 360, negative, over 360
const invalid1 = getAngleType(0);
assertEquals(invalid1, "Invalid angle"); // boundary: exactly 0

const invalid2 = getAngleType(360);
assertEquals(invalid2, "Invalid angle"); // boundary: exactly 360

const invalid3 = getAngleType(-10);
assertEquals(invalid3, "Invalid angle"); // negative number

const invalid4 = getAngleType(400);
assertEquals(invalid4, "Invalid angle"); // over 360