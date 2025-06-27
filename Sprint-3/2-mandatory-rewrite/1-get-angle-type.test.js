const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
test("returns 'Acute angle' for angles less than 90 degrees", () => {
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
test("returns 'Obtuse angle' for angles greater than 90 degrees and less than 180 degrees", () => {
  expect(getAngleType(91)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});

// Case 4: Identify Straight Angles:
test("returns 'Straight angle' for angles equal to 180 degrees", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
test("returns 'Reflex angle' for angles greater than 180 degrees and less than 360 degrees", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});

// there was an error in the original code that caused it to not work correctly
// the error was that the function did not handle angles greater than 180 and less than 360 degrees
// i then went to 1-get-angle-type.js and fixed the code to handle this case correctly

// TestRun "[Module-Structuring-and-Testing-Data] watch-tests:0:process-start:0 (20)" started
//  PASS  Sprint-3/2-mandatory-rewrite/1-get-angle-type.test.js
//   ✓ should identify right angle (90°) (3 ms)
//   ✓ returns 'Acute angle' for angles less than 90 degrees
//   ✓ returns 'Obtuse angle' for angles greater than 90 degrees and less than 180 degrees (1 ms)
//   ✓ returns 'Straight angle' for angles equal to 180 degrees
//   ✓ returns 'Reflex angle' for angles greater than 180 degrees and less than 360 degrees

// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        0.339 s, estimated 1 s
// Ran all test suites related to changed files.
