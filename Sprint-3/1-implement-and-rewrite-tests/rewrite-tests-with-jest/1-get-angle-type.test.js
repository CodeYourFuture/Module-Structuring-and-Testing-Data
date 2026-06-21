// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Case 1: Acute angles
describe("getAngleType", function () {
  test("Acute angles", function () {
    expect(getAngleType(1)).toEqual("Acute angle");
    expect(getAngleType(45)).toEqual("Acute angle");
    expect(getAngleType(89)).toEqual("Acute angle");
  });

  test("Right angle", function () {
    expect(getAngleType(90)).toEqual("Right angle");
  });

  test("Obtuse angles", function () {
    expect(getAngleType(91)).toEqual("Obtuse angle");
    expect(getAngleType(135)).toEqual("Obtuse angle");
    expect(getAngleType(179)).toEqual("Obtuse angle");
  });
  test("Straight angle", function () {
    expect(getAngleType(180)).toEqual("Straight angle");
  });

  test("Reflex angles", function () {
    expect(getAngleType(181)).toEqual("Reflex angle");
    expect(getAngleType(269)).toEqual("Reflex angle");
    expect(getAngleType(270)).toEqual("Reflex angle");
    expect(getAngleType(271)).toEqual("Reflex angle");
    expect(getAngleType(359)).toEqual("Reflex angle");
  });
  test("Invalid angle", function () {
    expect(getAngleType(0)).toEqual("Invalid angle");
    expect(getAngleType(360)).toEqual("Invalid angle");
    expect(getAngleType(400)).toEqual("Invalid angle");
    expect(getAngleType(-1)).toEqual("Invalid angle");
  });
});

// Case 2: Right angle
// Case 3: Obtuse angles
// Case 4: Straight angle
// Case 5: Reflex angles
// Case 6: Invalid angles
