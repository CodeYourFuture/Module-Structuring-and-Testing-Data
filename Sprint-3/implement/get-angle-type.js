// Implement a function getAngleType

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

function getAngleType(angle) {
  if (angle === 0) {
    return "Zero angle";
  } else if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else if (angle > 180 && angle < 360) {
    return "Reflex angle";
  } else if (angle === 360) {
    return "Full angle";
  } else if (angle > 360) {
    angle = angle - 360;
    return getAngleType(angle);
  } else {
    return "Invalid degree";
  }
}
console.log("0:", getAngleType(0));
console.log("90:", getAngleType(90));
console.log("60:", getAngleType(60));
console.log("100:", getAngleType(100));
console.log("180:", getAngleType(180));
console.log("200:", getAngleType(200));
console.log("360:", getAngleType(360));
console.log("400:", getAngleType(400));
console.log("-30:", getAngleType(-30));
console.log("800:", getAngleType(800))

var angle = 90;
var result = getAngleType(angle);
var expectedResult = "Right angle";
console.assert(result == expectedResult, "Right angle"); //passed

var angle2 = 120;
var result2 = getAngleType(angle2);
var expectedResult2 = "Obtuse angle";
console.assert(result2 == expectedResult2, "Obtuse angle"); //passed

var angle3 = 30;
var result3 = getAngleType(angle3);
var expectedResult3 = "Acute angle";
console.assert(result3 == expectedResult3, "Acute angle"); //passed

var angle4 = 180;
var resutl4 = getAngleType(180);
var expectedResutl4 = "Straight angle";
console.assert(resutl4 == expectedResutl4, "Straight angle"); //passed

var angle5 = 300;
var result5 = getAngleType(300);
var expectedResult5 = "Reflex angle";
console.assert(result5 == expectedResult5, "Reflex angle"); //passed