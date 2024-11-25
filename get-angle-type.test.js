const getAngleType = require('./get-angle-type.test.js');

describe("getAngleType", () => {
    test("Checks Right angle for when angle is 90 degrees", () => {
        expect(getAngleType(90)).toBe("Right angle");
    });

    test("Checks Acute angle for when angle is less than 90 degrees", () => {
        expect(getAngleType(45)).toBe("Acute angle");
    });

    test("Checks Obtuse angle for when angle is greater than 90 and less than 180 degrees", () => {
        expect(getAngleType(135)).toBe("Obtuse angle");
    });

    test("Checks Straight angle for when angle equals 90 degrees", () => {
        expect(getAngleType(180)).toBe("Straight angle");
    });

    test("Checks Reflex angle for when angle is greater than 180 and less than 360 degrees", () => {
        expect(getAngleType(270)).toBe("Reflex angle");
    });
   
});