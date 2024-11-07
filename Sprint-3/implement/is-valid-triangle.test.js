// is-valid-triangle.test.js
const isValidTriangle = require("./is-valid-triangle"); // Assuming the function is in 'is-valid-triangle.js'

describe("isValidTriangle", () => {
  it("should return true for valid sides forming a triangle (e.g., 3, 4, 5)", () => {
    expect(isValidTriangle(3, 4, 5)).toBe(true); // This is a valid triangle (Pythagorean triple)
  });

  it("should return false if any side is non-positive (e.g., 0, 4, 5)", () => {
    expect(isValidTriangle(0, 4, 5)).toBe(false); // A side cannot be 0
  });

  it("should return false if any side is negative (e.g., -3, 4, 5)", () => {
    expect(isValidTriangle(-3, 4, 5)).toBe(false); // A side cannot be negative
  });

  it("should return false for an invalid triangle (e.g., 1, 2, 3)", () => {
    expect(isValidTriangle(1, 2, 3)).toBe(false); // 1 + 2 is not greater than 3, hence not a valid triangle
  });

  it("should return true for an equilateral triangle (e.g., 3, 3, 3)", () => {
    expect(isValidTriangle(3, 3, 3)).toBe(true); // All sides are equal, valid triangle
  });

  it("should return true for an isosceles triangle (e.g., 4, 4, 6)", () => {
    expect(isValidTriangle(4, 4, 6)).toBe(true); // Two sides equal, valid triangle
  });

  it("should return false for sides that cannot form a triangle (e.g., 1, 1, 3)", () => {
    expect(isValidTriangle(1, 1, 3)).toBe(false); // 1 + 1 is not greater than 3
  });
});
