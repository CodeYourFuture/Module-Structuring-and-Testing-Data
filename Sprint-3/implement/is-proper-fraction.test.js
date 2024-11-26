const isProperFraction = require("./is-proper-fraction");

const currentOutput = isProperFraction(1, 2);
const targetOutput = true;

test("Checks if the fraction is a Proper fraction (2/3) then return true", () => {
    expect(currentOutput).toEqual(targetOutput);
});

const currentOutput2 = isProperFraction(-4, 7);
const targetOutput2 = true;

test("Checks if the fraction is a Negative fraction (-1/3) then return true", () => {
    expect(currentOutput2).toEqual(targetOutput2);
});

const currentOutput3 = isProperFraction(5, 3);
const targetOutput3 = false;

test("Checks if the fraction is an Improper fraction (5/3) then return false", () => {
    expect(currentOutput3).toEqual(targetOutput3);
});

const currentOutput4 = isProperFraction(3, 3);
const targetOutput4 = false;

test("Checks if the Numerator equals to the Denominator (3/3) then return false", () => {
    expect(currentOutput4).toEqual(targetOutput4);
});

test("Throws an error when the denominator is zero", () => {
    expect(() => isProperFraction(3, 0)).toThrow("Denominator must be a positive number");
});