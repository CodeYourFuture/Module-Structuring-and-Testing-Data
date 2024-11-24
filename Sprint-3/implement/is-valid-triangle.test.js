const isValidTriangle = require('./is-valid-triangle'); 

describe('isValidTriangle', () => {
    
    test('should return true for a valid triangle where all sides satisfy the Triangle Inequality', () => {
        expect(isValidTriangle(3, 4, 5)).toBe(true); 
        expect(isValidTriangle(6, 6, 6)).toBe(true); 
        expect(isValidTriangle(10, 15, 20)).toBe(true); 
    });

    
    test('should return false for a triangle violating the Triangle Inequality', () => {
        expect(isValidTriangle(1, 2, 3)).toBe(false); 
        expect(isValidTriangle(5, 1, 1)).toBe(false); 
    });

    
    test('should return false for a triangle with zero or negative side lengths', () => {
        expect(isValidTriangle(0, 4, 5)).toBe(false); 
        expect(isValidTriangle(-1, 4, 5)).toBe(false); 
        expect(isValidTriangle(4, -2, 5)).toBe(false); 
        expect(isValidTriangle(4, 5, -3)).toBe(false); 
    });

    
    test('should return false for sides that are not numbers', () => {
        expect(isValidTriangle('a', 4, 5)).toBe(false); 
        expect(isValidTriangle(4, null, 5)).toBe(false); 
        expect(isValidTriangle(4, 5, undefined)).toBe(false); 
    });

    test('should return false for invalid inputs such as NaN or Infinity', () => {
        expect(isValidTriangle(NaN, 4, 5)).toBe(false); 
        expect(isValidTriangle(4, Infinity, 5)).toBe(false); 
    });
});
