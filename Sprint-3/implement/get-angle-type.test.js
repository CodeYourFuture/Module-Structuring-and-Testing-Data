// get-angle-type.test.js
const getAngleType = require('./get-angle-type');

describe('getAngleType', () => {
    test('should return "Right angle" for 90 degrees', () => {
        expect(getAngleType(90)).toBe("Right angle");
    });

    test('should return "Acute angle" for angles less than 90 degrees', () => {
        expect(getAngleType(45)).toBe("Acute angle");
        expect(getAngleType(0)).toBe("Acute angle");
    });

    test('should return "Obtuse angle" for angles greater than 90 and less than 180 degrees', () => {
        expect(getAngleType(135)).toBe("Obtuse angle");
    });

    test('should return "Straight angle" for 180 degrees', () => {
        expect(getAngleType(180)).toBe("Straight angle");
    });

    test('should return "Reflex angle" for angles greater than 180 and less than 360 degrees', () => {
        expect(getAngleType(225)).toBe("Reflex angle");
        expect(getAngleType(359)).toBe("Reflex angle");
    });

    test('should return "Invalid angle" for angles less than 0 or greater than or equal to 360', () => {
        expect(getAngleType(-45)).toBe("Invalid angle");
        expect(getAngleType(360)).toBe("Invalid angle");
        expect(getAngleType(400)).toBe("Invalid angle");
    });

    test('should return "Invalid angle" for non-numeric inputs', () => {
        expect(getAngleType("45")).toBe("Invalid angle");
        expect(getAngleType(null)).toBe("Invalid angle");
        expect(getAngleType(undefined)).toBe("Invalid angle");
        expect(getAngleType(true)).toBe("Invalid angle");
        expect(getAngleType(false)).toBe("Invalid angle");
        expect(getAngleType(NaN)).toBe("Invalid angle");
        expect(getAngleType(Infinity)).toBe("Invalid angle");
        expect(getAngleType(-Infinity)).toBe("Invalid angle");
        expect(getAngleType("hello")).toBe("Invalid angle");
        expect(getAngleType([1, 2, 3])).toBe("Invalid angle");
    });
});