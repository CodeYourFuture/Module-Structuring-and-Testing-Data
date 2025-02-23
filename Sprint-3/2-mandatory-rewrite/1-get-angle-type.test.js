const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("should identify Acute Angles(0° to 89°)", () => {
  expect(getAngleType(40)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("should identify Obtuse Angles(91° to 179°)", () => {
  expect(getAngleType(115)).toEqual("Obtuse Angle");
});
// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("should identify Straight Angle(180°)", () => {
  expect(getAngleType(180)).toEqual("Straight Angle");
});

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("should identify Reflex Angles(181° to 360°)", () => {
  expect(getAngleType(190)).toEqual("Reflex Angle");
});

// //SS
// const acute = getAngleType(45);
// assertEquals(acute, "Acute angle");

// const obtuse = getAngleType(120);
// assertEquals(obtuse, "Obtuse Angle");

// const straight = getAngleType(180);
// assertEquals(straight, "Straight Angle");

// const reflex = getAngleType(185);
// assertEquals(reflex, "Reflex Angle");
