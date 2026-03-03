// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Case 1: Acute angles
test(`should return "Acute angles" when (0 < angle < 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(1)).toBe("Acute angle");
  expect(getAngleType(45)).toBe("Acute angle");
  expect(getAngleType(89)).toBe("Acute angle");
});
// Case 2: Right angle
test(`should return "Right angle" when (angle === 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(90)).toBe("Right angle");
});
// Case 3: Obtuse angles
test(`should return "Obtuse angle" when (90 < angle < 180)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(97)).toBe("Obtuse angle");
  expect(getAngleType(129)).toBe("Obtuse angle");
  expect(getAngleType(165)).toBe("Obtuse angle");
});
// Case 4: Straight angle
test(`should return "Straight angle" when (angle ==180)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(180)).toBe("Straight angle");
});
// Case 5: Reflex angles
test(`should return "Reflex angles" when (180 < angle < 360)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(191)).toBe("Reflex angle");
  expect(getAngleType(250)).toBe("Reflex angle");
  expect(getAngleType(317)).toBe("Reflex angle");
});
// Case 6: Invalid angles
test(`should return "Invalid angles" when (angle >= 360 or angle<= 0 )`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(0)).toBe("Invalid angle");
  expect(getAngleType(-45)).toBe("Invalid angle");
  expect(getAngleType(370)).toBe("Invalid angle");
});
