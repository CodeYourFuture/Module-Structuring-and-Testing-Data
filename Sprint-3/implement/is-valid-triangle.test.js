const isValidTriangle = require("./is-valid-triangle.js");

  
  // Invalid triangle due to non-positive side lengths
  test('should return false if any side is zero or negative', () => {
    expect(isValidTriangle(3, 4, 0)).toBe(false); 
    expect(isValidTriangle(-3, 4, 5)).toBe(false); 
    expect(isValidTriangle(3, -4, 5)).toBe(false);
    expect(isValidTriangle(3, 4, -5)).toBe(false); 
  });

 // Invalid triangle according to the Triangle Inequality Theorem
  test('should return false if the sum of any two sides is less than or equal to the third side', () => {
    expect(isValidTriangle(1, 2, 3)).toBe(false);  
    expect(isValidTriangle(1, 1, 3)).toBe(false); 
    expect(isValidTriangle(5, 10, 20)).toBe(false);
  });

  // Valid triangle
  test('should return true if the sum of any two sides is greater than the third side', () => {
    expect(isValidTriangle(3, 4, 5)).toBe(true);  
    expect(isValidTriangle(5, 12, 13)).toBe(true);
    expect(isValidTriangle(7, 10, 12)).toBe(true);
  });


