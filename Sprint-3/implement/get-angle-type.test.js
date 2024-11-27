
const getAngleType = require("./get-angle-type");

const currentOutput = getAngleType(90);
const targetOutput = "Right angle";

test("Checks for Right Angle for when the angle is 90 degrees", () => {
    expect(currentOutput).toEqual(targetOutput);
});

const currentOutput2 = getAngleType(45);
const targetOutput2 = "Acute angle";

test("Checks for Acute angle for when the angle is less than 90 degrees", () => {
    expect(currentOutput2).toEqual(targetOutput2);
});

const currentOutput3 = getAngleType(145);
const targetOutput3 = "Obtuse angle";

test("Checks for Obtuse angle for when the angle is greater than 90 and less than 180 degrees", () => {
    expect(currentOutput3).toEqual(targetOutput3);
});

const currentOutput4 = getAngleType(180);
const targetOutput4 = "Straight angle";

test("Checks for Straight angle for when the angle is exactly 180 degrees", () => {
    expect(currentOutput4).toEqual(targetOutput4);
});

const currentOutput5 = getAngleType(192);
const targetOutput5 = "Reflex angle";

test("Checks for Reflex angle for when the angle is greater than 180 and less than 360 degrees", () => {
    expect(currentOutput5).toEqual(targetOutput5);
});



