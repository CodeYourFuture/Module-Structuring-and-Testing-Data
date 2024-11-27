const getAngleType = require("./get-angle-type");

describe("Angle Classification Tests", () => {
  it("should identify right angle (90°)", () => {
    expect(getAngleType(90)).toEqual("Right angle");
  });

  it("should identify acute angle (< 90°)", () => {
    expect(getAngleType(45)).toEqual("Acute angle");
  });

  it("should identify obtuse angle (> 90° but < 180°)", () => {
    expect(getAngleType(120)).toEqual("Obtuse angle");
  });

  it("should identify straight angle (180°)", () => {
    expect(getAngleType(180)).toEqual("Straight angle");
  });

  it("should identify reflex angle (> 180° but < 360°)", () => {
    expect(getAngleType(270)).toEqual("Reflex angle");
  });
});

describe("Error Handling Tests", () => {
  it("should throw error for invalid input type", () => {
    expect(() => getAngleType("90")).toThrow();
  });

  it("should throw error for angle >= 360°", () => {
    expect(() => getAngleType(360)).toThrow();
  });
});
