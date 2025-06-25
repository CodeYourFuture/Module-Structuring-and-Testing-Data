const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

test("Should Identify acute angle (45)" , () =>{
  expect(getAngleType(45)).toEqual("Acute angle")
})

test("Should Identify obtuse angle (120)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});

test("Should Identify straight angle (180)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

test("Should Identify reflex angle (271)", () => {
  expect(getAngleType(200)).toEqual("Reflex angle");
});
