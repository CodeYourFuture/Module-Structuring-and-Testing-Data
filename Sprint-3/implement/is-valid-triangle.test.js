const isValidTriangle = require("./is-valid-triangle");

describe("isValidTriangle", () => {
  test("should return true for valid triangle with sides 3, 4, 5", () => {
    expect(isValidTriangle(3, 4, 5)).toBe(true);
  });

  test("should return true for an equilateral triangle (3, 3, 3)", () => {
    expect(isValidTriangle(3, 3, 3)).toBe(true);
  });

  test("should return true for valid triangle with sides 6, 8, 10", () => {
    expect(isValidTriangle(6, 8, 10)).toBe(true);
  });

  test("should return false for sides 1, 2, 3 (violates inequality)", () => {
    expect(isValidTriangle(1, 2, 3)).toBe(false);
  });

  test("should return false for a side length of 0", () => {
    expect(isValidTriangle(0, 5, 7)).toBe(false);
  });

  test("should return false for a side with negative length", () => {
    expect(isValidTriangle(-3, 4, 5)).toBe(false);
  });

  test("should return false for sides 5, 1, 1 (violates inequality)", () => {
    expect(isValidTriangle(5, 1, 1)).toBe(false);
  });

  test("should return false for sides 1, 1, 2 (exact sum violates inequality)", () => {
    expect(isValidTriangle(1, 1, 2)).toBe(false);
  });

  test("should return true for sides 2, 2, 3", () => {
    expect(isValidTriangle(2, 2, 3)).toBe(true);
  });
});
