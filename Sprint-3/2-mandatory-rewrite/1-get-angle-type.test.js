const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("should identify Acute agles", () => {
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(88)).toEqual("Acute angle");
});



// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"


test("should identify Obtuse angle", () => {
  expect(getAngleType(99)).toEqual("Obtuse angle");
  expect(getAngleType(179)).toEqual("Obtuse angle");
});


// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

test("should identify Straight angle", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});



// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

test("should identify Reflex angle", () => {
  expect(getAngleType(181)).toEqual("Reflex angle");
  expect(getAngleType(359)).toEqual("Reflex angle");
});

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"


test("should identify angle not in range (0, 360)", () => {
  expect(getAngleType(360)).toEqual("invalid");
  expect(getAngleType(370)).toEqual("invalid");
});