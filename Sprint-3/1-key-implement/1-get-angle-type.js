function getAngleType(angle) {
   if (angle === 90) return "Right angle";
   if(angle<90) return "Acute angle";
   if(angle>90 && angle<180) return "Obtuse angle";
   if(angle === 180) return "Straight angle"
   if (angle>180 && angle <360) return "Reflex angle"

   // read to the end, complete line 36, then pass your test here
}

	
// Acceptance criteria:
// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:
// Case 1: Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"
const right = getAngleType(90);
assertEquals(right, "Right angle");
// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
const acute = getAngleType(45);
assertEquals(acute, "Acute angle");
// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
const obtuse = getAngleType(120);
assertEquals(obtuse, "Obtuse angle");
// ====> write your test here, and then add a line to pass the test in the function above

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
// ====> write your test here, and then add a line to pass the test in the function above
const straightangle = getAngleType(180)
assertEquals(straightangle, "Straight angle")
// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
// ====> write your test here, and then add a line to pass the test in the function above
const reflexangle = getAngleType(250)
assertEquals(reflexangle, "Reflex angle")