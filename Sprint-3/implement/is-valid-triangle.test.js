const { isValidTriangle } = require('./is-valid-triangle');

// Scenario: invalid triangle (Triangle Inequality violation)
test('should return false when the sum of any two sides is less than or equal to the third side', () => {
    expect(isValidTriangle(1, 2, 3)).toBe(false); // a + b = c
    expect(isValidTriangle(10, 5, 4)).toBe(false); // b + c < a
    expect(isValidTriangle(7, 3, 10)).toBe(false); // a + c < b
});

// Scenario: invalid triangle (Zero or negative side lengths)
test('should return false when any of the sides are less than or equal to zero', () => {
    expect(isValidTriangle(0, 1, 1)).toBe(false); // a is zero
    expect(isValidTriangle(-1, 1, 1)).toBe(false); // a is negative
    expect(isValidTriangle(3, -5, 4)).toBe(false); // b is negative
    expect(isValidTriangle(5, 5, -5)).toBe(false); // c is negative
});

// Scenario: valid triangle
test('should return true when the sum of any two sides is greater than the third side', () => {
    expect(isValidTriangle(3, 4, 5)).toBe(true); // Classic 3-4-5 triangle
    expect(isValidTriangle(7, 10, 5)).toBe(true); // Another valid triangle
    expect(isValidTriangle(6, 8, 10)).toBe(true); // Pythagorean triple
});