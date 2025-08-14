// Final implementation of getAngleType function
// Handles all angle types as per the acceptance criteria:
// Right angle, Acute angle, Obtuse angle, Straight angle, and Reflex angle
function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  else if (angle < 90) return "Acute angle";
  else if (angle > 90 && angle < 180) return "Obtuse angle";
  else if (angle === 180) return "Straight angle";
  else if (angle > 180 && angle < 360) return "Reflex angle";
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

// Case 1: Identify Right Angles:
const right = getAngleType(90);
assertEquals(right, "Right angle");

// Case 2: Identify Acute Angles:
const acute = getAngleType(45);
assertEquals(acute, "Acute angle");

// Case 3: Identify Obtuse Angles:
const obtuse = getAngleType(120);
assertEquals(obtuse, "Obtuse angle");

// Case 4: Identify Straight Angles:
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");

// Case 5: Identify Reflex Angles:
const reflex = getAngleType(270);
assertEquals(reflex, "Reflex angle");