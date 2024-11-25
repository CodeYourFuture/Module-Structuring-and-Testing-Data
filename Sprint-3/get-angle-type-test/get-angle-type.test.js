
const getAngleType = require("./get-angle-type"); 

test("It checks angle types", function () {
    expect(getAngleType(90)).toBe("Right angle");
    expect(getAngleType(45)).toBe("Acute angle");
    expect(getAngleType(135)).toBe("Obtuse angle");
    expect(getAngleType(180)).toBe("Straight angle");
    expect(getAngleType(270)).toBe("Reflex angle");
});