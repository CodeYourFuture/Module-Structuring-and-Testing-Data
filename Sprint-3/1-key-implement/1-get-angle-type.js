// Implement a function getAngleType
// Build up your function case by case, writing tests as you go
// The first test and case is written for you. The next case has a test, but no code.
// Execute this script in your terminal
// node 1-get-angle-type.js
// The assertion error will tell you what the expected output is
// Write the code to pass the test
// Then, write the next test! :) Go through this process until all the cases are implemented

function getAngleType(angle) {
   if (angle === 90) return "Right Angle";
   // read to the end, complete line 36, then pass your test here
   if (angle > 0 && angle < 90) return "Acute Angle";
   if (angle > 90 && angle < 180) return "Obtuse Angle";
   if (angle === 180) return "Straight Angle";
   if (angle > 180 && angle < 360) return "Reflex Angle";
   if( angle <= 0 || angle >= 360)return "Invalid Angle"; // This handles angles outside the 0-360 range 
    //if(angle === 0 || angle === 360) 
    //return "Invalid Angle"; // This handles angles outside the 0-360 range
    // you can add more cases here as needed
    // but make sure to write tests for each case first
    // and then implement the code to pass the test
    // this will help you build your function step by step
    // and ensure that each case is handled correctly
    // you can also add more tests to cover edge cases
    // for example, what happens if the angle is negative or greater than 360?
    // you can also add tests for angles that are not whole numbers
}

// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Case 1: Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"
const right = getAngleType(90);
assertEquals(right, "Right Angle");

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
const acute = getAngleType(89.9);
assertEquals(acute, "Acute Angle");

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
const obtuse = getAngleType(90.5);
assertEquals(obtuse, "Obtuse Angle");
// ====> write your test here, and then add a line to pass the test in the function above

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
// ====> write your test here, and then add a line to pass the test in the function above
const straight = getAngleType(180);
assertEquals(straight, "Straight Angle");

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
// ====> write your test here, and then add a line to pass the test in the function above
const reflex = getAngleType(270);
assertEquals(reflex, "Reflex Angle");

// Case 6: Handle Invalid Angles:
// When the angle is less than 0 or greater than 360 degrees,
// Then the function should return "Invalid angle"
// ====> write your test here, and then add a line to pass the test in the function above
const invalid = getAngleType(361);
assertEquals(invalid, "Invalid Angle");
  
// Case 7: Handle Angles Exactly at 0:
// When the angle is exactly 0 degrees,
// Then the function should return "Invalid angle"
const zeroAngle = getAngleType(0);
assertEquals(zeroAngle, "Invalid Angle"); 

// Case 11: Handle Angles Exactly at 360:
// When the angle is exactly 360 degrees,
// Then the function should return "Invalid angle"    
const fullCircle = getAngleType(360);
assertEquals(fullCircle, "Invalid Angle");


console.log(getAngleType(0));
console.log(getAngleType(90));
console.log(getAngleType(180));
console.log(getAngleType(360));
console.log(getAngleType(1));
console.log(getAngleType(91));
console.log(getAngleType(181));
console.log(getAngleType(-90));










