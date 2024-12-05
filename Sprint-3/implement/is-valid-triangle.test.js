const  isValidTriangle = require('./is-valid-triangle'); 

describe('isValidTriangle', () => {
  test('should return true for a valid triangle', () => {
    expect(isValidTriangle(3, 4, 5)).toBe(true);  // example test
  });

  test('should return false for an invalid triangle', () => {
    expect(isValidTriangle(1, 2, 3)).toBe(false);  // example test
  });

  test('should return false for a triangle with zero or negative side length', () => {
    expect(isValidTriangle(0, 4, 5)).toBe(false);  // example test
  });
});