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

  if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle === 90) {
    return "Right angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle === 180) {
    return "Straight angle";
  } else if (angle > 180 && angle < 360) {
    return "Reflex angle";
  }
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
// Test Cases
// cases are an array of arrays, where each inner array has two elements:
//   - The first element is the input value (angle)
//   - The second element is the expected output

const testCases = [
  [1, "Acute angle"],
  [45, "Acute angle"],
  [89, "Acute angle"],
  [90, "Right angle"],
  [91, "Obtuse angle"],
  [135, "Obtuse angle"],
  [179, "Obtuse angle"],
  [180, "Straight angle"],
  [181, "Reflex angle"],
  [225, "Reflex angle"],
  [270, "Reflex angle"],
  [359, "Reflex angle"],
  [0, "Invalid angle"],
  [-1, "Invalid angle"],
  [360, "Invalid angle"],
  [400, "Invalid angle"],
];

// loop through each case and assert that the output is correct
for (const [angle, expected] of testCases) {
  const actual = getAngleType(angle);
  assertEquals(actual, expected);
}
