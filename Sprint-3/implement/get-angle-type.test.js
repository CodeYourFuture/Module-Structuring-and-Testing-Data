// Import the function
const getAngleType = require("./get-angle-type");

describe("getAngleType", () => {
  it('should return "Acute angle" for an angle less than 90 degrees', () => {
    expect(getAngleType(45)).toBe("Acute angle"); // Corrected expectation
  });

  it('should return "Right angle" for an angle of exactly 90 degrees', () => {
    expect(getAngleType(90)).toBe("Right angle");
  });

  it('should return "Obtuse angle" for an angle between 90 and 180 degrees', () => {
    expect(getAngleType(120)).toBe("Obtuse angle");
  });

  it('should return "Straight angle" for an angle of exactly 180 degrees', () => {
    expect(getAngleType(180)).toBe("Straight angle");
  });

  it('should return "Reflex angle" for an angle between 180 and 360 degrees', () => {
    expect(getAngleType(310)).toBe("Reflex angle"); // Corrected expectation
  });

  it('should return "Invalid angle" for negative angles', () => {
    expect(getAngleType(-30)).toBe("Invalid angle");
  });

  it('should return "Invalid angle" for angles equal to or greater than 360 degrees', () => {
    expect(getAngleType(360)).toBe("Invalid angle");
  });
});
