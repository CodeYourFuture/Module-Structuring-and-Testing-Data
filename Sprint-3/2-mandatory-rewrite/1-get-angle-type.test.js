const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
// const acute = getAngleType(45);
// assertEquals(acute, "Acute angle");
test("should identify acute angel (>0˚ & <90˚)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
// const obtuse = getAngleType(120);
// assertEquals(obtuse, "Obtuse angle");
test("should identify obtuse angel (>90˚ & < 180˚)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});


// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
// const straight = getAngleType(180);
// assertEquals(straight, "Straight angle");
test("should identify straight angel (180˚)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});


// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
// const reflex = getAngleType(270);
// assertEquals(reflex, "Reflex angle");
test("should identify straight angel (>180˚ & <360˚)", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
});
