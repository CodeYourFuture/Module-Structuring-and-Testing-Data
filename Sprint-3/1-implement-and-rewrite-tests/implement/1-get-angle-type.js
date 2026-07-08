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
  if (angle > 0 && angle < 90){
    return "Acute angle";
  }
  else if (angle == 90){
    return "Right angle";
  }
  else if (angle > 90 && angle < 180){
    return "Obtuse angle";
  }
  else if (angle == 180){
    return "Straight angle";
  }
  else if (angle > 180 && angle < 360){
    return "Reflex angle";
  }
  else if(angle === 0){
    return "Zero Angle"
  }
  else if(angle === 360){
    return "Complete angle"
  }
  else{
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

// Tests for right angles
assertEquals(getAngleType(90), "Right angle");

// Tests for acute angles
assertEquals(getAngleType(56), "Acute angle");
assertEquals(getAngleType(1), "Acute angle");

// Test for a straight line
assertEquals(getAngleType(180), "Straight angle");

// Test for obtuse angle
assertEquals(getAngleType(95), "Obtuse angle");
assertEquals(getAngleType(160), "Obtuse angle");
assertEquals(getAngleType(102), "Obtuse angle");

// Test for reflex angle
assertEquals(getAngleType(181), "Reflex angle");
assertEquals(getAngleType(249), "Reflex angle");

// Test for invalid angles
assertEquals(getAngleType(-980), "Invalid angle");
assertEquals(getAngleType(9082), "Right angle"); 
assertEquals(getAngleType(672), "Invalid angle");
//
assertEquals(getAngleType(0), "Zero angle");
assertEquals(getAngleType(360), "Complete angle");
console.log("Execution finished! If any test failed, console.assert errors will appear above.");

