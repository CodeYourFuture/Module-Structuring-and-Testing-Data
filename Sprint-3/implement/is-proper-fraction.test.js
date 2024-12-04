const isProperFraction = require("./is-proper-fraction");


test("Checks if the fraction is a Proper fraction (2/3) or (-4/-7) then return true", () => {
    expect(isProperFraction(1, 2)).toEqual(true);
    expect(isProperFraction(-4,-7)).toEqual(true);
});

test("Checks if the fraction is a Negative fraction (-4/7) then return true", () => {
    expect(isProperFraction(-4, 7)).toEqual(true);
});

test("Checks if the fraction is an Improper fraction (5/3) then return false", () => {
    expect(isProperFraction(5, 3)).toEqual(false);
});

test("Checks if the Numerator === Denominator (3/3) then return false", () => {
    expect(isProperFraction(3, 3)).toEqual(false);
});

test("Throws an error when the denominator is zero", () => {
    expect(() => isProperFraction(3, 0)).toThrow("Denominator must be a positive or negative number");
});