const isValidTriangle = require("./is-valid-triangle");

describe("isValidTriangle Tests", () => {
  test("Invalid triangle", () => {
    expect(isValidTriangle(6, 9, -1)).toBe(false);
    expect(isValidTriangle(2, 4, 0)).toBe(false);
    expect(isValidTriangle(-6, -9, -7)).toBe(false);
  });

  test("Valid triangle", () => {
    expect(isValidTriangle(6, 9, 7)).toBe(true);
    expect(isValidTriangle(3, 3, 3)).toBe(true);
    expect(isValidTriangle(1200, 1800, 2700)).toBe(true);
  });
});
