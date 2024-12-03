
const getAngleType = require("./get-angle-type");


test("Checks for Right Angle for when the angle is 90 degrees", () => {
    expect(getAngleType(90)).toEqual("Right angle");
});


test("Checks for Acute angle, when the angle < 90 degrees", () => {
    expect(getAngleType(45)).toEqual("Acute angle");
});


test("Checks for Obtuse angle, when the angle > 90 and angle < 180 degrees", () => {
    expect(getAngleType(145)).toEqual("Obtuse angle");
});


test("Checks for Straight angle, when the angle is exactly 180 degrees", () => {
    expect(getAngleType(180)).toEqual("Straight angle");
});


test("Expect 'Reflect angle' when 180 < angle < 360", () => {
    expect(getAngleType(192)).toEqual("Reflex angle");
});



