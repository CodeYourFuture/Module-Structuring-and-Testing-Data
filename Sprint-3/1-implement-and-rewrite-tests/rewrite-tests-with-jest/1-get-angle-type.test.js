// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Case 1: Acute angles
describe("Acute angle", () => {
  test("valid acute angles", () => {
    expect(getAngleType(1)).toBe("Acute angle");
    expect(getAngleType(45)).toBe("Acute angle");
    expect(getAngleType(89)).toBe("Acute angle");
  });

  test("boundary cases are NOT acute", () => {
    expect(getAngleType(0)).not.toBe("Acute angle");
    expect(getAngleType(90)).not.toBe("Acute angle");
  });
});

// Case 2: Right angle
describe("Right angle", () => {
  test("should return 'Right angle' when angle is 90", () => {
    expect(getAngleType(90)).toBe("Right angle");
  });
});

// Case 3: Obtuse angles
describe("Obtuse angle", () => {
  test("should return 'Obtuse angle' when (90 < angle < 180)", () => {
    expect(getAngleType(95)).toBe("Obtuse angle");
    expect(getAngleType(120)).toBe("Obtuse angle");
    expect(getAngleType(100)).toBe("Obtuse angle");
  });
});

// Case 4: Straight angle
describe("Straight angle", () => {
  test("should return 'Straight angle' when angle is 180", () => {
    expect(getAngleType(180)).toBe("Straight angle");
  });
});
// Case 5: Reflex angles
describe("Reflex angle", () => {
  test("should return 'Reflex angle' when (180 < angle < 360)", () => {
    expect(getAngleType(190)).toBe("Reflex angle");
    expect(getAngleType(300)).toBe("Reflex angle");
    expect(getAngleType(200)).toBe("Reflex angle");
  });
});
// Case 6: Invalid angles
describe("Invalid angle", () => {
  test("should return 'Invalid angle' when (angle <= 0 or angle > 360)", () => {
    expect(getAngleType(0)).toBe("Invalid angle");
    expect(getAngleType(400)).toBe("Invalid angle");
    expect(getAngleType(-10)).toBe("Invalid angle");
    expect(getAngleType(360)).toBe("Invalid angle");
  });
});
