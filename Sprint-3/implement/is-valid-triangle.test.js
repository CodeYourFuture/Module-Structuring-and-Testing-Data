const isValidTriangle = require("./is-valid-triangle");

test("should return true for a valid triangle", () => {
    expect(isValidTriangle(3, 4, 5)).toBe(true);
    expect(isValidTriangle(5, 5, 5)).toBe(true);
    expect(isValidTriangle(8, 10, 6)).toBe(true);
});

test("should return true for sides 2, 2, 3", () => {
    expect(isValidTriangle(2, 2, 3)).toBe(true);
});

test("should return false (violates inequality)", () => {
    expect(isValidTriangle(1, 2, 3)).toBe(false);
});

 test("should return false as one side length is 0", () => {
    expect(isValidTriangle(0, 5, 7)).toBe(false);
});

test("should return false as one side has negative length", () => {
    expect(isValidTriangle(3, -4, 5)).toBe(false);
});

 test("should return false (violates inequality)", () => {
    expect(isValidTriangle(5, 1, 1)).toBe(false);
    expect(isValidTriangle(1, 1, 2)).toBe(false);
  });