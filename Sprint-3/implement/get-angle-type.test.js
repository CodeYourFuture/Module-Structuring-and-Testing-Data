const getAngleType = require('./path-to-your-function-file');

describe("getAngleType", () => {
    test("should return 'Invalid angle' for negative angles", () => {
        expect(getAngleType(-1)).toBe("Invalid angle");
    });

    test("should return 'Invalid angle' for angles >= 360", () => {
        expect(getAngleType(360)).toBe("Invalid angle");
        expect(getAngleType(400)).toBe("Invalid angle");
    });

    test("should return 'Zero angle' for 0 degrees", () => {
        expect(getAngleType(0)).toBe("Zero angle");
    });

    test("should return 'Acute angle' for angles less than 90 degrees", () => {
        expect(getAngleType(45)).toBe("Acute angle");
        expect(getAngleType(89.999)).toBe("Acute angle");
    });

    test("should return 'Right angle' for exactly 90 degrees", () => {
        expect(getAngleType(90)).toBe("Right angle");
    });

    test("should return 'Obtuse angle' for angles between 90 and 180 degrees", () => {
        expect(getAngleType(135)).toBe("Obtuse angle");
        expect(getAngleType(179.999)).toBe("Obtuse angle");
    });

    test("should return 'Straight angle' for exactly 180 degrees", () => {
        expect(getAngleType(180)).toBe("Straight angle");
    });

    test("should return 'Reflex angle' for angles between 180 and 360 degrees", () => {
        expect(getAngleType(270)).toBe("Reflex angle");
        expect(getAngleType(359.999)).toBe("Reflex angle");
    });

    test("should return 'Invalid angle' for non-numeric inputs", () => {
        expect(getAngleType("90")).toBe("Invalid angle");
        expect(getAngleType(null)).toBe("Invalid angle");
        expect(getAngleType(undefined)).toBe("Invalid angle");
        expect(getAngleType(NaN)).toBe("Invalid angle");
    });
});


