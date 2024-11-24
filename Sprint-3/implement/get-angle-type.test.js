const getAngleType = require('./get-angle-type.js');

describe('getAngleType', () => {
    test('should identify a Right angle when angle is 90 degrees', () => {
        expect(getAngleType(90)).toBe("Right angle");
    });

    test('should identify an Acute angle when angle is less than 90 degrees', () => {
        expect(getAngleType(45)).toBe("Acute angle");
        expect(getAngleType(0)).toBe("Acute angle");
    });

    test('should identify an Obtuse angle when angle is greater than 90 but less than 180 degrees', () => {
        expect(getAngleType(120)).toBe("Obtuse angle");
        expect(getAngleType(179.99)).toBe("Obtuse angle");
    });

    test('should identify a Straight angle when angle is 180 degrees', () => {
        expect(getAngleType(180)).toBe("Straight angle");
    });

    test('should identify a Reflex angle when angle is greater than 180 but less than 360 degrees', () => {
        expect(getAngleType(270)).toBe("Reflex angle");
        expect(getAngleType(359.99)).toBe("Reflex angle");
    });

    test('should return "Invalid angle" for angles outside the valid range', () => {
        expect(getAngleType(360)).toBe("Invalid angle");
        expect(getAngleType(-10)).toBe("Invalid angle");
        expect(getAngleType(400)).toBe("Invalid angle");
    });
});
