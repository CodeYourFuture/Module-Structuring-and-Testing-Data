test('should return true when absolute value of numerator is less than absolute value of denominator', function() {
    expect(isProperFraction(1, 2)).toBe(true);
    expect(isProperFraction(-3, 5)).toBe(true);
    expect(isProperFraction(3, -7)).toBe(true);
    expect(isProperFraction(-4, -9)).toBe(true);
});

test('should return false when absolute value of numerator is greater than or equal to absolute value of denominator', function() {
    expect(isProperFraction(5, 3)).toBe(false);
    expect(isProperFraction(-8, 4)).toBe(false);
    expect(isProperFraction(6, -6)).toBe(false);
    expect(isProperFraction(-10, -10)).toBe(false);
});

test('should return "Error" when denominator is 0', function() {
    expect(isProperFraction(1, 0)).toBe("Error");
    expect(isProperFraction(-5, 0)).toBe("Error");
});

test('should handle edge cases with zero numerator', function() {
    expect(isProperFraction(0, 5)).toBe(true); 
    expect(isProperFraction(0, -5)).toBe(true);
    expect(isProperFraction(0, 0)).toBe("Error"); 
});

test('should handle non-integer numerators and denominators', function() {
    expect(isProperFraction(1.5, 2.5)).toBe(true);
    expect(isProperFraction(3.5, 2.5)).toBe(false);
    expect(isProperFraction(-2.1, -2.2)).toBe(true);
});

test('should handle large values for numerator and denominator', function() {
    expect(isProperFraction(1000000, 1000001)).toBe(true);
    expect(isProperFraction(1000000, 1000000)).toBe(false);
    expect(isProperFraction(-100000000, -99999999)).toBe(false);
});

test('should handle invalid inputs gracefully', function() {
    expect(() => isProperFraction(null, 5)).toThrow(); 
    expect(() => isProperFraction(3, undefined)).toThrow(); 
    expect(() => isProperFraction([], {})).toThrow(); 
});