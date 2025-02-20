const getAngleType = require("./1-get-angle-type");

// function getAngleType(angle) {
//   if (angle === 90) return "Right angle";
//   else if (angle < 90) return "Acute angles";
//   else if (angle > 90 && angle < 180) return "Obtuse angles";
//   else if (angle === 180) return "Straight angle";
//   else if (angle > 180 && angle < 360) return "Reflex angle";
// }

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("this should identify the Acute angle", () => {
  expect(getAngleType(65)).toEqual("Acute angle");
  expect(getAngleType(30)).toEqual("Acute angle");
})

// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("this should identify the Obtuse angle", () => {
  expect(getAngleType(98)).toEqual("Obtuse angle");
  expect(getAngleType(150)).toEqual("Obtuse angle");
});



// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("this should identify the Straight angle", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("this should identify the Reflex angle", () => {
  expect(getAngleType(183)).toEqual("Reflex angle");
  expect(getAngleType(340)).toEqual("Reflex angle");
});
