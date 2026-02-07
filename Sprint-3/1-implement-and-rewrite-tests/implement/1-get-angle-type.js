function getAngleType(angle) {
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

// Acute Angles Test
let acute = getAngleType(45);
assertEquals(acute, "Acute angle");

// Right Angles Test
let right = getAngleType(90);
assertEquals(right, "Right angle");

// Obtuse Angles Test
let obtuse = getAngleType(120);
assertEquals(obtuse, "Obtuse angle");

// Straight Angles Test
let straight = getAngleType(180);
assertEquals(straight, "Straight angle");

// Reflex Angles Test
let reflex = getAngleType(200);
assertEquals(reflex, "Reflex angle");

// Invalid Angles Test
let invalid = getAngleType(0);
assertEquals(invalid, "Invalid angle");

// Invalid Angles Test
invalid = getAngleType(360);
assertEquals(invalid, "Invalid angle");

// Invalid Angles Test
invalid = getAngleType(500);
assertEquals(invalid, "Invalid angle");

// Invalid Angles Test
invalid = getAngleType(-200);
assertEquals(invalid, "Invalid angle");

// Test for float inputs
acute = getAngleType(34.333);
assertEquals(acute, "Acute angle");
