function getAngleType(angle) {
  // Ensure non-numbers are treated as an invalid angles
  if (typeof angle != "number") return "Invalid angle";

  if (angle > 0 && angle < 90) return "Acute angle";
  if (angle === 90) return "Right angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  if (angle > 180 && angle < 360) return "Reflex angle";

  return "Invalid angle";
}

module.exports = getAngleType;

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
