function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  if (angle < 90) return "Acute angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  if (angle > 180 && angle < 360) return "Reflex angle";
}
// Helper function for assertions
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
// ✅ Test cases

// Case 1: Right angle
const right = getAngleType(90);
assertEquals(right, "Right angle");

// Case 2: Acute angle
const acute = getAngleType(45);
assertEquals(acute, "Acute angle");

// Case 3: Obtuse angle
const obtuse = getAngleType(120);
assertEquals(obtuse, "Obtuse angle");

// Case 4: Straight angle
const straight = getAngleType(180);
assertEquals(straight, "Straight angle");
