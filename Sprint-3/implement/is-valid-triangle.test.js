const isValidTriangle = require("./is-valid-triangle");

test("Checks for Valid Triangle where the sum is (a + b > c)", () => {
    expect(isValidTriangle(3, 5, 4)).toEqual(true);
});

test("Checks for Invalid Triangle when any of the sides are less than or equal to zero ", () => {
    expect(isValidTriangle(0, 2, 4)).toEqual(false);
});

test("Checks for Invalid Triangle, where the sum is (b + c <= a)", () => {
    expect(isValidTriangle(2, 2, 4)).toEqual(false);
});
