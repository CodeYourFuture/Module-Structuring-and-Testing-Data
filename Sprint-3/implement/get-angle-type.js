// Implement a function getAngleType

function getAngleType(angle) {
  if (angle === 90) return "Right angle";

  if (angle < 90) return "Acute angle";

  if (angle > 90 && angle < 180) return "Obtuse angle";

  if (angle === 180) return "Straight angle";

  if (angle > 180 && angle < 360) return "Reflex angle";
}

// maybe this could have been a switch statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// 🧪 Let's test each stated criterion
// Here's my test function to make this easier for me to read and follow

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"
const right = getAngleType(90);
assertEquals(right, "Right angle");

// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
const acute = getAngleType(45);
assertEquals(acute, "Acute angle");

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
const obtuse = getAngleType(120);
assertEquals(obtuse, "Obtuse angle");

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
const reflex = getAngleType(70);
assertEquals(reflex, "Reflex angle");
