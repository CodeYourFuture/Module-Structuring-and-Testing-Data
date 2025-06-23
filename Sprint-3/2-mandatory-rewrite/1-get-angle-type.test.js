const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
test("Should identify acute angle (45°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});


// Case 3: Identify Obtuse Angles:
test("Should identify obtuse angle (120°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");  
});

// Case 4: Identify Straight Angles:
test("Should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});
// Case 5: Identify Reflex Angles:
test("Should identify reflex angle (330°)", () => {
  expect(reflex).toEqual("Reflex angle");
}); 
