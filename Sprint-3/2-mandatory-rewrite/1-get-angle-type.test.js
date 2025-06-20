const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right Angle");
}); 

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
test("should identify an acute angle (less than 90°)", () => {
  expect(getAngleType(26)).toEqual("Acute Angle");
});

// Case 3: Identify Obtuse Angles:
test("should identify an obtuse angle (greater than 90° but less than 180°)", () => {
  expect(getAngleType(142)).toEqual("Obtuse Angle");
});

// Case 4: Identify Straight Angles:
test("should identify a straight angle (exactly 180°)", () => {
  expect(getAngleType(180)).toEqual("Straight Angle");
});


// Case 5: Identify Reflex Angles:
test("should identify a reflex angle (between 180° and 360°)", () => {
  expect(getAngleType(251)).toEqual("Reflex Angle");
});

