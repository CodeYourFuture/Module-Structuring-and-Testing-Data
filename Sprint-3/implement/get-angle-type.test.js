const getAngleType = require ("./get-angle-type.js") 

// Test case for an acute angle (less than 90)
 test('should return "Acute angle" for angles less than 90', () => {
    expect(getAngleType(45)).toBe('Acute angle');
});

// Test case for a right angle (exactly 90)
test('should return "Right angle" for 90 degrees', () => {
    expect(getAngleType(90)).toBe('Right angle');
});

// Test case for an obtuse angle (between 90 and 180)
test('should return "Obtuse angle" for angles between 90 and 180', () => {
    expect(getAngleType(120)).toBe('Obtuse angle');
});

// Test case for a straight angle (exactly 180)
test('should return "Straight angle" for 180 degrees', () => {
    expect(getAngleType(180)).toBe('Straight angle');
});

// Test case for a reflex angle (between 180 and 360)
test('should return "Reflex angle" for angles between 180 and 360', () => {
    expect(getAngleType(270)).toBe('Reflex angle');
});

// Test case for non-numeric input (invalid)
test('should throw an error for non-numeric input', () => {
    expect(() => getAngleType("abc")).toThrow('Angle should be a number');
});

// Test case for an angle less than 0 (invalid)
test('should throw an error for negative angles', () => {
    expect(() => getAngleType(-10)).toThrow('Angle should be between 0 and 360 degrees');
});

// Test case for an angle greater than or equal to 360 (invalid)
test('should throw an error for angles greater than or equal to 360', () => {
    expect(() => getAngleType(400)).toThrow('Angle should be between 0 and 360 degrees');
});

// Test case for edge angle 0 degrees (acute)
test('should return "Acute angle" for 0 degrees', () => {
    expect(getAngleType(0)).toBe('Acute angle');
});

// Test case for edge angle 360 degrees (invalid)
test('should throw an error for 360 degrees', () => {
    expect(() => getAngleType(360)).toThrow('Angle should be between 0 and 360 degrees');
});