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
 // first converting conditions into variables
  const acuteAngle = (angle > 0 && angle < 90);
  const rightAngle = (angle === 90);
  const obtuseAngle = (angle > 90 && angle < 180);
  const straightAngle = (angle === 180);
  const reflexAngle = (angle > 180 && angle < 360);
  const zeroAngle = (angle === 0);
  
  
  if (rightAngle) {
    // checking for conditions
      return  "Right angle";
  } else if (zeroAngle) {
      return "Invalid angle";
  }else if (obtuseAngle) {
      return "Obtuse angle";
  } else if (straightAngle) {
      return "Straight angle";
  } else if (reflexAngle) {
      return "Reflex angle";
  } else if (acuteAngle) {
      return "Acute angle";
  } else if (angle === zeroAngle || angle != acuteAngle || angle != rightAngle || angle != obtuseAngle || angle != straightAngle || angle != reflexAngle) {
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

const acute = getAngleType(45);
assertEquals(acute, "Acute angle");

const obtuse = getAngleType(120);
assertEquals(obtuse, "Obtuse angle");

const straight = getAngleType(180);
assertEquals(straight, "Straight angle");

const reflex = getAngleType(270);
assertEquals(reflex, "Reflex angle");

const invalidAngle1 = getAngleType(360);
assertEquals(invalidAngle1, "Invalid angle");

const invalidAngle2 = getAngleType(0);
assertEquals(invalidAngle2, "Invalid angle");

const invalidAngle3 = getAngleType(-1);
assertEquals(invalidAngle3, "Invalid angle");
