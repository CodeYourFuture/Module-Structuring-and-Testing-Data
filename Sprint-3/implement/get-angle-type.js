// Implement a function getAngleType

const { default: test } = require("node:test");

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
function getAngleType(n) {
  if (n == 90) return "Right Angle";
  if (n == 180) return "Straight Angle";
  if (n < 90 && n > 0) return "Acute Angle";
  if (90 < n && n < 180) return "Obtuse Angle";
  if (180 < n && n < 360) return "Reflex Angle ";
  if (n <= 0 || n >= 360) return "Error";
}
//console.log(getAngleType(23));
//This function will get a number as a angle and return what angle  is
console.assert(
  getAngleType(90) == "Right Angle",
  "Angle 90 must be Right Angle"
);
console.assert(
  getAngleType(180) == "Straight Angle",
  "Angle 180 must be Right Angle"
);
console.assert(getAngleType(0) == "Error", "Angle 0  is not acceptable");
console.assert(getAngleType(360) == "Error", "Angle 360 is not acceptable");

console.assert(
  getAngleType(23) == "Acute Angle",
  "Angle 23 must be Acute Angle"
);

console.assert(
  getAngleType(179) == "Obtuse Angle",
  "Angle 179 must be Obtuse Angle"
);
console.assert(
  getAngleType(190) == "Reflex Angle ",
  "Angle 190 must be  Reflex Angle"
);
console.assert(getAngleType(-260) == "Error", "Angle -260  is not acceptable");
