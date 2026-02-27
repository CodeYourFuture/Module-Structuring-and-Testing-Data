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
  // Check for invalid angles (outside 0-360 range or negative)
  if (angle <= 0 || angle >= 360) {
    return "Invalid angle";
  }
 
  // Check for acute angle (0 < angle < 90)
  if (angle < 90) {
    return "Acute angle";
  }
 
  // Check for right angle (exactly 90)
  if (angle === 90) {
    return "Right angle";
  }
 
  // Check for obtuse angle (90 < angle < 180)
  if (angle < 180) {
    return "Obtuse angle";
  }
 
  // Check for straight angle (exactly 180)
  if (angle === 180) {
    return "Straight angle";
  }
 
  // Check for reflex angle (180 < angle < 360)
  if (angle < 360) {
    return "Reflex angle";
  }
 
  // This should not be reached due to the first check, but included for completeness
  return "Invalid angle";
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

// ============================================================
// ACUTE ANGLE TESTS (0 < angle < 90)
// ============================================================
console.log("--- Acute Angle Tests (0° < angle < 90°) ---");

const acute1 = getAngleType(1);
assertEquals(acute1, "Acute angle");
console.log(" Test: 1° is Acute angle");

const acute2 = getAngleType(45);
assertEquals(acute2, "Acute angle");
console.log(" Test: 45° is Acute angle");

const acute3 = getAngleType(60);
assertEquals(acute3, "Acute angle");
console.log("Test: 60° is Acute angle");

const acute4 = getAngleType(89);
assertEquals(acute4, "Acute angle");
console.log(" Test: 89° is Acute angle (boundary - just below 90°)");

const acute5 = getAngleType(0.5);
assertEquals(acute5, "Acute angle");
console.log(" Test: 0.5° is Acute angle (decimal)");

// ============================================================
// RIGHT ANGLE TEST (exactly 90)
// ============================================================
console.log("\n--- Right Angle Test (exactly 90°) ---");

const right = getAngleType(90);
assertEquals(right, "Right angle");
console.log(" Test: 90° is Right angle");

// ============================================================
// OBTUSE ANGLE TESTS (90 < angle < 180)
// ============================================================
console.log("\n--- Obtuse Angle Tests (90° < angle < 180°) ---");

const obtuse1 = getAngleType(91);
assertEquals(obtuse1, "Obtuse angle");
console.log(" Test: 91° is Obtuse angle (boundary - just above 90°)");

const obtuse2 = getAngleType(120);
assertEquals(obtuse2, "Obtuse angle");
console.log(" Test: 120° is Obtuse angle");

const obtuse3 = getAngleType(135);
assertEquals(obtuse3, "Obtuse angle");
console.log(" Test: 135° is Obtuse angle");

const obtuse4 = getAngleType(179);
assertEquals(obtuse4, "Obtuse angle");
console.log(" Test: 179° is Obtuse angle (boundary - just below 180°)");

const obtuse5 = getAngleType(150.5);
assertEquals(obtuse5, "Obtuse angle");
console.log(" Test: 150.5° is Obtuse angle (decimal)");

// ============================================================
// STRAIGHT ANGLE TEST (exactly 180)
// ============================================================
console.log("\n--- Straight Angle Test (exactly 180°) ---");

const straight = getAngleType(180);
assertEquals(straight, "Straight angle");
console.log(" Test: 180° is Straight angle");

// ============================================================
// REFLEX ANGLE TESTS (180 < angle < 360)
// ============================================================
console.log("\n--- Reflex Angle Tests (180° < angle < 360°) ---");

const reflex1 = getAngleType(181);
assertEquals(reflex1, "Reflex angle");
console.log(" Test: 181° is Reflex angle (boundary - just above 180°)");

const reflex2 = getAngleType(200);
assertEquals(reflex2, "Reflex angle");
console.log(" Test: 200° is Reflex angle");

const reflex3 = getAngleType(270);
assertEquals(reflex3, "Reflex angle");
console.log(" Test: 270° is Reflex angle");

const reflex4 = getAngleType(300);
assertEquals(reflex4, "Reflex angle");
console.log(" Test: 300° is Reflex angle");

const reflex5 = getAngleType(359);
assertEquals(reflex5, "Reflex angle");
console.log(" Test: 359° is Reflex angle (boundary - just below 360°)");

const reflex6 = getAngleType(225.7);
assertEquals(reflex6, "Reflex angle");
console.log(" Test: 225.7° is Reflex angle (decimal)");

// ============================================================
// INVALID ANGLE TESTS
// ============================================================
console.log("\n--- Invalid Angle Tests ---");

// Zero
const invalid1 = getAngleType(0);
assertEquals(invalid1, "Invalid angle");
console.log(" Test: 0° is Invalid angle");

// Negative angles
const invalid2 = getAngleType(-1);
assertEquals(invalid2, "Invalid angle");
console.log(" Test: -1° is Invalid angle");

const invalid3 = getAngleType(-45);
assertEquals(invalid3, "Invalid angle");
console.log(" Test: -45° is Invalid angle");

const invalid4 = getAngleType(-90);
assertEquals(invalid4, "Invalid angle");
console.log(" Test: -90° is Invalid angle");

const invalid5 = getAngleType(-180);
assertEquals(invalid5, "Invalid angle");
console.log(" Test: -180° is Invalid angle");

// 360 and above
const invalid6 = getAngleType(360);
assertEquals(invalid6, "Invalid angle");
console.log(" Test: 360° is Invalid angle (boundary)");

const invalid7 = getAngleType(361);
assertEquals(invalid7, "Invalid angle");
console.log(" Test: 361° is Invalid angle");

const invalid8 = getAngleType(400);
assertEquals(invalid8, "Invalid angle");
console.log(" Test: 400° is Invalid angle");

const invalid9 = getAngleType(720);
assertEquals(invalid9, "Invalid angle");
console.log(" Test: 720° is Invalid angle (full rotation)");

const invalid10 = getAngleType(1000);
assertEquals(invalid10, "Invalid angle");
console.log(" Test: 1000°  is Invalid angle");
