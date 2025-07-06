const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
test.each([1, 45, 89.999])("Should identify acute angle (%f°)", (angle) => {
  expect(getAngleType(angle)).toEqual("Acute angle");
});


// Case 3: Identify Obtuse Angles:
test.each([91, 120, 179.999])("Should identify obtuse angle (%f°)", (angle) => {
  expect(getAngleType(angle)).toEqual("Obtuse angle");  
});

// Case 4: Identify Straight Angles:
test("Should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});
// Case 5: Identify Reflex Angles:
test.each([181, 300, 359.999])("Should identify reflex angle (%f°)", (angle) => {
  expect(getAngleType(angle)).toEqual("Reflex angle");
}); 
