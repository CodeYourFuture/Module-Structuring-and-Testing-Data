const {isValidTriangle} = require("./is-valid-triangle");

describe("isValidTriangle", () => {
  test("should return true for a valid triangle", () => {
    expect(isValidTriangle(3, 4, 5)).toBe(true);
  });

  test("should return true for an equilateral triangle", () => {
    expect(isValidTriangle(2, 2, 2)).toBe(true);
  });

  test("should return true for an isosceles triangle", () => {
    expect(isValidTriangle(5, 5, 8)).toBe(true);
  });

  test("should return false when sum of two sides equals third side", () => {
    expect(isValidTriangle(5, 5, 10)).toBe(false);
  });

  test("should return false when sum of two sides less than third side", () => {
    expect(isValidTriangle(1, 1, 3)).toBe(false);
  });

  test("should return false for zero side length", () => {
    expect(isValidTriangle(0, 5, 5)).toBe(false);
  });

  test("should return false for negative side length", () => {
    expect(isValidTriangle(-1, 2, 2)).toBe(false);
  });
});