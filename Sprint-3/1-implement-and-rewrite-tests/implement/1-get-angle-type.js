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

  if (angle > 0 && angle < 90) {
    return "Acute angle";//Implement condition to execute acute angle
  }else if (angle === 90){
    return "Right angle";// checking for right angle
  }else if (angle > 90 && angle < 180){
    return "Obtuse angle";
  }else if (angle === 180){
    return "Straight angle";
  }else if (angle > 180 && angle < 360){
    return "Reflex angle";
  }else if (angle <=0){
    return "Invalid angle"
  } else {
    // Anything else must be 360 or greater than 360
    return "Invalid angle"; 
  }
    

  // TODO: Implement this function
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
// test acute angle
const acute = getAngleType(1);// Test just above zero
assertEquals(acute, "Acute angle");
const acute2 = getAngleType(45); // Test acute angle just at the middle
assertEquals(acute2, "Acute angle");
const acute3 = getAngleType(89.9); // Test just above zero
assertEquals(acute3, "Acute angle");
const right = getAngleType(90);// Testing for right angle
assertEquals(right, "Right angle");
//testing for obtuse angles
const obtuse = getAngleType(90.1);
assertEquals(obtuse, "Obtuse angle");
const obtuse1 = getAngleType(136);
assertEquals(obtuse1,"Obtuse angle");
const obtuse2 = getAngleType(179.9);
assertEquals(obtuse2,"Obtuse angle");
// Testing for a straight angle
const straight = getAngleType(180);
assertEquals(straight,"Straight angle");
//Testing for Reflex angles
const reflex = getAngleType(180.1);
assertEquals(reflex,"Reflex angle");// testing for the lower limit reflex angle 
const reflex1 = getAngleType(270);
assertEquals(reflex1,"Reflex angle");
const reflex2 = getAngleType(359.9)// testing upper limit of reflex angle 
assertEquals(reflex2,"Reflex angle");
//Testing invalid lower angle numbers 
const lessThanOrEqualToZero = getAngleType(-1);
assertEquals(lessThanOrEqualToZero,"Invalid angle");
const equalToZero = getAngleType(0);
assertEquals(equalToZero, "Invalid angle");// Testing for when angle is zero 
const equal360 = getAngleType(360); // Testing whn angle is 360
assertEquals(equal360,"Invalid angle");
const over360 = getAngleType(360.1); // Testing when angle is over 360
assertEquals(over360, "Invalid angle");

console.log("All test passed!");

