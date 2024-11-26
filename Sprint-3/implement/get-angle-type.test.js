
const {getAngleType} = require("./get-angle-type");

describe("getAngleType", () => {
  test("should identify right angle (90 degrees)", () => {
    expect(getAngleType(90)).toBe("Right angle");
  });

  test("should identify acute angle (less than 90 degrees)", () => {
    expect(getAngleType(45)).toBe("Acute angle");
  });

  test("should identify straight angle (180 degrees)", () => {
    expect(getAngleType(180)).toBe("Straight angle");
  });

  test("should identify obtuse angle (between 90 and 180 degrees)", () => {
    expect(getAngleType(120)).toBe("Obtuse angle");
  });

  test("should identify reflex angle (between 180 and 360 degrees)", () => {
    expect(getAngleType(270)).toBe("Reflex angle");
  });

  test("should identify invalid angle (greater than 360 degrees)", () => {
    expect(getAngleType(400)).toBe("Invalid angle");
  });

  test("should identify invalid angle (negative degrees)", () => {
    expect(getAngleType(-45)).toBe("Invalid angle");
  });
});