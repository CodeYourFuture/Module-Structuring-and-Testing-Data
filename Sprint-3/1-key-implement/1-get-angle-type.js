// Implement a function getAngleType
// Build up your function case by case, writing tests as you go
// The first test and case is written for you. The next case has a test, but no code.
// Execute this script in your terminal
// node 1-get-angle-type.js
// The assertion error will tell you what the expected output is
// Write the code to pass the test
// Then, write the next test! :) Go through this process until all the cases are implemented

function getAngleType(angle) {
   if (angle === 90) return "Right angle";
   // read to the end, complete line 36, then pass your test here
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

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Case 1: Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"
const right = getAngleType(90);
assertEquals(right, "Right angle");

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,Add commentMore actions
// Then the function should return "Acute angle"

test("should identify acute angles (e.g., 45°)", () => {
    expect(getAngleType(45)).toEqual("Acute angle");
    expect(getAngleType(89.9)).toEqual("Acute angle");
}); 

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

test("should identify obtuse angles (e.g., 90.1° and 179.9°)", () => {
    expect(getAngleType (90.1)).toEqual("Obtuse angle");
    expect(getAngleType (179.9)).toEqual("Obtuse angle");
}); 

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

test("should identify straight angle (180°)", () => {
    expect(getAngleType(180)).toEqual("Straight angle");
});
// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

test("should identify reflex angles (180.1° and 359.9°)", () => {
    expect(getAngleType(180.1)).toEqual("Reflex angle");
    expect(getAngleType (359.9)).toEqual("Reflex angle");
  });
