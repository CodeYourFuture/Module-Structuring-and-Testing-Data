const getAngleType = require("./1-get-angle-type");

  /*test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");});

  test("should identify acute angle (45°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");});

  test("should identify obtuse angle (120°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");});

  test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");});

  test("should identify reflex angle (220°)", () => {
  expect(getAngleType(220)).toEqual("Reflex angle");});

  */
 test("should identify right angle (angle === 90)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

test("should identify acute angle (angle < 90)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(30)).toEqual("Acute angle");
  expect(getAngleType(0.1)).toEqual("Acute angle");
});

test("should identify obtuse angle (90 < angle < 180)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
  expect(getAngleType(135)).toEqual("Obtuse angle");
  expect(getAngleType(179.9)).toEqual("Obtuse angle");
});

test("should identify straight angle (angle === 180)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("should identify reflex angle (180 < angle < 360)", () => {
  expect(getAngleType(220)).toEqual("Reflex angle");
  expect(getAngleType(300)).toEqual("Reflex angle");
  expect(getAngleType(359.999)).toEqual("Reflex angle");
  expect(getAngleType(180.001)).toEqual("Reflex angle");
});

test("should return 'Invalid angle' for invalid inputs", () => {
  expect(getAngleType(0)).toEqual("Invalid angle");
  expect(getAngleType(-45)).toEqual("Invalid angle");
  expect(getAngleType(360)).toEqual("Invalid angle");
  expect(getAngleType(400)).toEqual("Invalid angle");
  expect(getAngleType("90")).toEqual("Invalid angle");
  expect(getAngleType(NaN)).toEqual("Invalid angle");
});



// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
