const getAngleType = require('./get-angle-type'); // Import your function

describe('getAngleType', () => {
    test('should return "Right angle" for 90 degrees', () => {
        expect(getAngleType(90)).toBe('Right angle');
    });

    test('should return "Acute angle" for an angle less than 90 degrees', () => {
        expect(getAngleType(45)).toBe('Acute angle');
    });

    test('should return "Obtuse angle" for an angle greater than 90 but less than 180', () => {
        expect(getAngleType(120)).toBe('Obtuse angle');
    });

    test('should return "Straight angle" for 180 degrees', () => {
        expect(getAngleType(180)).toBe('Straight angle');
    });

    test('should return "Reflex angle" for an angle greater than 180 but less than 360', () => {
        expect(getAngleType(270)).toBe('Reflex angle');
    });
});
