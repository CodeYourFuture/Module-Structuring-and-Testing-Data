const getAngleType = require("./1-get-angle-type");

test('returns "Right angle" for angle equal to 90', () => {
  expect(getAngleType(90)).toBe("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test('returns "Acute angle" for angles less than 90', () => {
  expect(getAngleType(45)).toBe("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test('returns "Obtuse angle" for angles between 90 and 180', () => {
  expect(getAngleType(120)).toBe("Obtuse angle");
});

// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test('returns "Straight angle" for angle equal to 180', () => {
  expect(getAngleType(180)).toBe("Straight angle");
});

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

test('returns "Reflex angle" for angles between 180 and 360', () => {
  expect(getAngleType(270)).toBe("Reflex angle");
});
// Case 6: Handle Invalid Angles
// When the angle is less than or equal to 0,
// Or when the angle is 360 or greater,
// Or when the input is not a number,
// Then the function should return "Invalid angle"
test("returns 'Invalid angle' when angle is 0", () => {
  expect(getAngleType(0)).toBe("Invalid angle");
});

test("returns 'Invalid angle' when angle is negative", () => {
  expect(getAngleType(-45)).toBe("Invalid angle");
});

test("returns 'Invalid angle' when angle is exactly 360", () => {
  expect(getAngleType(360)).toBe("Invalid angle");
});

test("returns 'Invalid angle' when angle is greater than 360", () => {
  expect(getAngleType(400)).toBe("Invalid angle");
});

test("returns 'Invalid angle' when input is a string", () => {
  expect(getAngleType("90")).toBe("Invalid angle");
});

test("returns 'Invalid angle' when input is null", () => {
  expect(getAngleType(null)).toBe("Invalid angle");
});

test("returns 'Invalid angle' when input is undefined", () => {
  expect(getAngleType(undefined)).toBe("Invalid angle");
});

test("returns 'Invalid angle' when input is NaN", () => {
  expect(getAngleType(NaN)).toBe("Invalid angle");
});














