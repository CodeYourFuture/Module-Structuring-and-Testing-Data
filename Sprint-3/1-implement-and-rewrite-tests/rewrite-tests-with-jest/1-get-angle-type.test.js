const getAngleType = require("../implement/1-get-angle-type");

describe("getAngleType", () => {
  test("returns Acute angle", () => {
    expect(getAngleType(1)).toBe("Acute angle");
    expect(getAngleType(45)).toBe("Acute angle");
    expect(getAngleType(89)).toBe("Acute angle");
  });

  test("returns Right angle", () => {
    expect(getAngleType(90)).toBe("Right angle");
  });

  test("returns Obtuse angle", () => {
    expect(getAngleType(100)).toBe("Obtuse angle");
    expect(getAngleType(179)).toBe("Obtuse angle");
  });

  test("returns Straight angle", () => {
    expect(getAngleType(180)).toBe("Straight angle");
  });

  test("returns Reflex angle", () => {
    expect(getAngleType(200)).toBe("Reflex angle");
    expect(getAngleType(359)).toBe("Reflex angle");
  });

  test("returns Invalid angle", () => {
    expect(getAngleType(0)).toBe("Invalid angle");
    expect(getAngleType(360)).toBe("Invalid angle");
    expect(getAngleType(-10)).toBe("Invalid angle");
  });
});