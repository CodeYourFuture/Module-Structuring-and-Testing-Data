// Implement a function getAngleType
// Build up your function case by case, writing tests as you go
// The first test and case is written for you. The next case has a test, but no code.
// Execute this script in your terminal
// node 1-get-angle-type.js
// The assertion error will tell you what the expected output is
// Write the code to pass the test
// Then, write the next test! :) Go through this process until all the cases are implemented

function getAngleType(angle) {
  if (typeof angle !== "number" || angle <= 0 || angle > 360)
    return "Invalid angle";
  if (angle === 90) return "Right angle";
  if (angle === 180) return "Straight angle";
  if (angle > 0 && angle < 90) return "Acute angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle > 180 && angle < 360) return "Reflex angle";

  return "Invalid angle";
}

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
assertEquals(getAngleType(120), "Obtuse angle");

// ====> write your test here, and then add a line to pass the test in the function above
// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
// ====> write your test here, and then add a line to pass the test in the function above
assertEquals(getAngleType(180), "Straight angle");

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
// ====> write your test here, and then add a line to pass the test in the function above
assertEquals(getAngleType(181), "Reflex angle");
assertEquals(getAngleType(359), "Reflex angle");

// Case 6: No valid input:
// When the angle is greater than 360 degrees and less than 0 degrees,
// Then the function should return "Invalid angle"
// ====> write your test here, and then add a line to pass the test in the function above
assertEquals(getAngleType(-5), "Invalid angle");
assertEquals(getAngleType(361), "Invalid angle");

// Case 6: Not number input:
// When the angle is not a number,
// Then the function should return "Invalid angle"
// ====> write your test here, and then add a line to pass the test in the function above
assertEquals(getAngleType("-5"), "Invalid angle");
assertEquals(getAngleType(true), "Invalid angle");
assertEquals(getAngleType("Hello"), "Invalid angle");
