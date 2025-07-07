const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right Angle");
});

// Case 2: Identify Acute Angles:
test("should identify an acute angle (less than 90°)", () => {
  expect(getAngleType(26)).toEqual("Acute Angle");
});

// Case 3: Identify Obtuse Angles:
test("should identify an obtuse angle (greater than 90° but less than 180°)", () => {
  expect(getAngleType(142)).toBe("Obtuse Angle");
});

// Case 4: Identify Straight Angles:
test("should identify a straight angle (exactly 180°)", () => {
  expect(getAngleType(180)).toBe("Straight Angle");
});

// Case 5: Identify Reflex Angles:
test("should identify a reflex angle (between 180° and 360°)", () => {
  expect(getAngleType(251)).toBe("Reflex Angle");
});

// Case 6: Handle angles that are not within range (≥ 360 or ≤ 0):
test("return 'Invalid angle' for angle equal to or greater than 360", () => {
  expect(getAngleType(360)).toBe("Invalid angle");
  expect(getAngleType(400)).toBe("Invalid angle");
});

// Case 7: Reject angles that are zero or negative:
test("return 'Invalid angle' for angle less than or equal to 0", () => {
  expect(getAngleType(0)).toBe("Invalid angle");
  expect(getAngleType(-45)).toBe("Invalid angle");
});
