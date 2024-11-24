const getAngleType = require("./get-angle-type"); 

//Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle

test(`should return "Right angle" exactly for 90 degrees`, function () {
  const currentInput = getAngleType(90);
  const targetInput = "Right angle";
  expect(currentInput).toBe(targetInput);
});

test(`should return "Acute angle" when degrees is less than 90 degrees`, function () {
  const currentInput = getAngleType(45);
  const targetInput = "Acute angle";
  expect(currentInput).toBe(targetInput);
});

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
//The angle 179° is a Obtuse angle

test(`Should return Obtuse Angles when angle is greater than 90 degrees and less than 180 degrees`, function () {
  const currentInput = getAngleType(120);
  const targetInput = "Obtuse angle";
  expect(currentInput).toBe(targetInput);
});

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
//The angle 180° is a Straight angle.

test(`should return Straight Angles when the angle is exactly 180 degree`, function () {
  const currentInput = getAngleType(180);
  const targetInput = "Straight angle";
  expect(currentInput).toBe(targetInput);
});

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

test(`Should return Reflex Angles when the angle is greater than 180 degrees and less than 360 degrees`, function () {
  const currentInput = getAngleType(190);
  const targetInput = "Reflex angle";
  expect(currentInput).toBe(targetInput);
});
