const isValidTriangle = require("./is-valid-triangle");

test("Checks for Valid Triangle where the sum of any two sides is greater than the third side ", () => {
    const currentOutput = isValidTriangle(3, 5, 4);
    const targetOutput = true;

expect(currentOutput).toEqual(targetOutput);
});

test("Checks for Invalid Triangle when any of the sides are less than or equal to zero ", () => {
    const currentOutput = isValidTriangle(0, 2, 4);
    const targetOutput = false;

expect(currentOutput).toEqual(targetOutput);
});

test("Checks for Invalid Triangle, when the sum of any two side is less than or equal to the length of the third side ", () => {
    const currentOutput = isValidTriangle(2, 2, 4);
    const targetOutput = false;

expect(currentOutput).toEqual(targetOutput);
});
