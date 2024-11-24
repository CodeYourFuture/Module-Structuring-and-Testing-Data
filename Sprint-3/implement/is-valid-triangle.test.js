// scenario: invalid triangle
//When the sum of any two side lengths is less than or equal to the length of the
// third side*/

const isValidTriangle = require("./is-valid-triangle"); 

describe("isValidTriangle Function Tests", () => {
  // Scenario: Invalid Triangle - Sum of Two Sides <= Third Side
  test("Invalid Triangle: sum of any two sides is less than or equal to the third side", () => {
    expect(isValidTriangle(1, 2, 3)).toBe("false"); // 1 + 2 <= 3
    expect(isValidTriangle(5, 1, 1)).toBe("false"); // 5 + 1 <= 6
    expect(isValidTriangle(10, 10, 20)).toBe("false"); // 10 + 10 = 20
  });

  // Scenario: Invalid Triangle - Zero or Negative Sides
  test("Invalid Triangle: side lengths are less than or equal to zero", () => {
    expect(isValidTriangle(-1, 5, 5)).toBe("false"); // Negative side
    expect(isValidTriangle(0, 4, 5)).toBe("false"); // Zero side
    expect(isValidTriangle(3, 3, 0)).toBe("false"); // Zero side
  });

  // Scenario: Valid Triangle
  test("Valid Triangle: sum of any two sides is greater than the third side", () => {
    expect(isValidTriangle(3, 4, 5)).toBe("true"); // 3 + 4 > 5, etc.
    expect(isValidTriangle(7, 10, 5)).toBe("true"); // 7 + 10 > 5, etc.
    expect(isValidTriangle(6, 8, 10)).toBe("true"); // 6 + 8 > 10, etc.
  });
});

