/**
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

/**
 * function getAngleType(angle) {
 * // TODO: Implement this function
 *}
*/

// The line below allows us to load the getAngleType function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.

/**
 * module.exports = getAngleType;
 */

// This helper function is written to make our assertions easier to read.
// If the actual output matches the target output, the test will pass

/**
 *function assertEquals(actualOutput, targetOutput) {
 * console.assert(
 *   actualOutput === targetOutput,
 *   `Expected ${actualOutput} to equal ${targetOutput}`
 * );
 *}
 */

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

/**
 *	const right = getAngleType(90);
 *	assertEquals(right, "Right angle");
 */

// Solution:
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

/**
 * function getAngleType(angle) {
  // Check for invalid angles (outside 0-360 range)
  if (angle <= 0 || angle >= 360) {
    return "Invalid angle";
  }

  // Check for specific angle types
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
  }

  // This line should theoretically never be reached given our conditions,
  // but included as a safety net
  return "Invalid angle";
 *}
 */

// The line below allows us to load the getAngleType function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getAngleType;

// This helper function is written to make our assertions easier to read.
// If the actual output matches the target output, the test will pass

/**
	function assertEquals(actualOutput, targetOutput) {
	  console.assert(
	    actualOutput === targetOutput,
	    `Expected ${actualOutput} to equal ${targetOutput}`
	  );
	}
 */

// Write tests to cover all cases, including boundary and invalid cases.
console.log("Running tests for getAngleType function...\n");

/**
// Test 1: Acute angles
console.log("Testing Acute angles:");
const acute1 = getAngleType(45);
assertEquals(acute1, "Acute angle");

const acute2 = getAngleType(89);
assertEquals(acute2, "Acute angle");

const acute3 = getAngleType(1);
assertEquals(acute3, "Acute angle");

// Test 2: Right angle
console.log("\nTesting Right angle:");
const right = getAngleType(90);
assertEquals(right, "Right angle");

// Test 3: Obtuse angles
console.log("\nTesting Obtuse angles:");
const obtuse1 = getAngleType(95);
assertEquals(obtuse1, "Obtuse angle");

const obtuse2 = getAngleType(135);
assertEquals(obtuse2, "Obtuse angle");

const obtuse3 = getAngleType(179);
assertEquals(obtuse3, "Obtuse angle");

// Test 4: Straight angle
console.log("\nTesting Straight angle:");
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");

// Test 5: Reflex angles
console.log("\nTesting Reflex angles:");
const reflex1 = getAngleType(185);
assertEquals(reflex1, "Reflex angle");

const reflex2 = getAngleType(270);
assertEquals(reflex2, "Reflex angle");

const reflex3 = getAngleType(359);
assertEquals(reflex3, "Reflex angle");

// Test 6: Invalid angles (boundary cases and outside range)
console.log("\nTesting Invalid angles:");

// Boundary cases at 0 and 360
const invalid1 = getAngleType(0);
assertEquals(invalid1, "Invalid angle");

const invalid2 = getAngleType(360);
assertEquals(invalid2, "Invalid angle");

// Negative angles
const invalid3 = getAngleType(-45);
assertEquals(invalid3, "Invalid angle");

const invalid4 = getAngleType(-90);
assertEquals(invalid4, "Invalid angle");

const invalid5 = getAngleType(-180);
assertEquals(invalid5, "Invalid angle");

// Angles greater than 360
const invalid6 = getAngleType(365);
assertEquals(invalid6, "Invalid angle");

const invalid7 = getAngleType(400);
assertEquals(invalid7, "Invalid angle");

const invalid8 = getAngleType(720);
assertEquals(invalid8, "Invalid angle");

console.log("\nAll tests completed!");
*
*/

// Writing by me @Carlos Abreu

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
  // Check for invalid angles (outside 0-360 range)
  if (angle <= 0 || angle >= 360) {
    return "Invalid angle";
  }

  // Check for specific angle types
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
  }

  // This line should theoretically never be reached given our conditions,
  // but included as a safety net
  return "Invalid angle";
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

// Write tests to cover all cases, including boundary and invalid cases.
console.log("Running tests for getAngleType function...\n");

// Test 1: Acute angles
console.log("Testing Acute angles:");
const acute1 = getAngleType(45);
assertEquals(acute1, "Acute angle");

const acute2 = getAngleType(89);
assertEquals(acute2, "Acute angle");

const acute3 = getAngleType(1);
assertEquals(acute3, "Acute angle");

// Test 2: Right angle
console.log("\nTesting Right angle:");
const right = getAngleType(90);
assertEquals(right, "Right angle");

// Test 3: Obtuse angles
console.log("\nTesting Obtuse angles:");
const obtuse1 = getAngleType(95);
assertEquals(obtuse1, "Obtuse angle");

const obtuse2 = getAngleType(135);
assertEquals(obtuse2, "Obtuse angle");

const obtuse3 = getAngleType(179);
assertEquals(obtuse3, "Obtuse angle");

// Test 4: Straight angle
console.log("\nTesting Straight angle:");
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");

// Test 5: Reflex angles
console.log("\nTesting Reflex angles:");
const reflex1 = getAngleType(185);
assertEquals(reflex1, "Reflex angle");

const reflex2 = getAngleType(270);
assertEquals(reflex2, "Reflex angle");

const reflex3 = getAngleType(359);
assertEquals(reflex3, "Reflex angle");

// Test 6: Invalid angles (boundary cases and outside range)
console.log("\nTesting Invalid angles:");

// Boundary cases at 0 and 360
const invalid1 = getAngleType(0);
assertEquals(invalid1, "Invalid angle");

const invalid2 = getAngleType(360);
assertEquals(invalid2, "Invalid angle");

// Negative angles
const invalid3 = getAngleType(-45);
assertEquals(invalid3, "Invalid angle");

const invalid4 = getAngleType(-90);
assertEquals(invalid4, "Invalid angle");

const invalid5 = getAngleType(-180);
assertEquals(invalid5, "Invalid angle");

// Angles greater than 360
const invalid6 = getAngleType(365);
assertEquals(invalid6, "Invalid angle");

const invalid7 = getAngleType(400);
assertEquals(invalid7, "Invalid angle");

const invalid8 = getAngleType(720);
assertEquals(invalid8, "Invalid angle");

console.log("\nAll tests completed!");

