const getAngleType = require("./1-get-angle-type");

test("testing for multiple different angles", () => {
  // REPLACE the comments with the tests
  // make your test descriptions as clear and readable as possible

  // Case 2: Identify Acute Angles:
  // When the angle is less than 90 degrees,
  // Then the function should return "Acute angle"
  expect(getAngleType(90)).toEqual("Right angle");
  // Case 3: Identify Obtuse Angles:
  // When the angle is greater than 90 degrees and less than 180 degrees,
  // Then the function should return "Obtuse angle"
  expect(getAngleType(120)).toEqual("Obtuse angle");
  // Case 4: Identify Straight Angles:
  // When the angle is exactly 180 degrees,
  // Then the function should return "Straight angle"
  expect(getAngleType(180)).toEqual("Straight angle");
  // Case 5: Identify Reflex Angles:
  // When the angle is greater than 180 degrees and less than 360 degrees,
  // Then the function should return "Reflex angle"
  expect(getAngleType(300)).toEqual("Reflex angle");
});
