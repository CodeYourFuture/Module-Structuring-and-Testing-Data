const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("returns 'Acute angle' for angles between 0 and 90", function () {
  expect(getAngleType(45)).toBe("Acute angle");
  expect(getAngleType(89)).toBe("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

 test("returns 'Obtuse angle' for angles between 90 and 180", function () {
   expect(getAngleType(120)).toBe("Obtuse angle");
   expect(getAngleType(179)).toBe("Obtuse angle");
 });

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
 test("returns 'Straight angle' for 180 degrees", function () {
   expect(getAngleType(180)).toBe("Straight angle");
 });

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
  test("returns 'Reflex angle' for angles between 180 and 360", function () {
    expect(getAngleType(270)).toBe("Reflex angle");
    expect(getAngleType(359)).toBe("Reflex angle");
  });
