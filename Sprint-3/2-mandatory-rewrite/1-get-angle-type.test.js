const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"
test("should identify acute angle(45)", () =>{
  expect(getAngleType(45)).tOEqual("Acute angle");
})
// Case 3: Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"
test("should identify obtuse angle (120)", () =>{
  expect(getAngleType(120)).toEqual("Obtuse angle");
})
// Case 4: Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"
test("should identify Straight angle (180" , () =>{
expect(getAngleType(180)).tOEqual("Straight angle");
})
// Case 5: Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"
test("should identify reflex angle (290)", () =>{
expect(getAngleType(120)).toEqual("Reflex angle")
})
