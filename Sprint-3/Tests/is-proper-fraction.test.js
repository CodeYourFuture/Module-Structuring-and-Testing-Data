/* Testing criteria - to determine that the input is a proper fraction, true or false
The input will consist of 2 numbers, numerator and denominator:
If either the numerator or denominator is zero, it must be converted to absolute values.
If the numerator is smaller than the denominator, it is a proper fraction: true
If the numerator is larger than the denominator it is not a proper fraction: false
If the denominator is 0, it should throw an error: "Denominator cannot be zero"
If the numerator is 0, it should throw an error: "Numerator cannot be zero"
If the numerator is equal to the denominator, it is not a proper fraction: false
If any other inputs are entered, it should return: "Please enter a valid numerator and/or denominator"
*/

const {isProperFraction} = require ('../../implement/is-proper-fraction');
describe("isProperFraction function", () => {
//Typical cases
test("should return 'True' when numerator is smaller than denominator", () => {
    expect(isProperFraction(2, 5)).toBe("True");
});

test("should return 'False' when numerator is larger than denominator", () => {
    expect(isProperFraction(5, 2)).toBe("False");
});

test("should return 'False' when numerator is equal to the denominator", () => {
    expect(isProperFraction(2, 2)).toBe("False");
});

//Invalid cases
test("should return error when numerator or denominator is 0", () => {
    expect(isProperFraction(0, 5)).toBe("The numerator and/or denominator cannot be zero");
});

test("should return error when numerator or denominator is 0", () => {
    expect(isProperFraction(5, 0)).toBe("The numerator and/or denominator cannot be zero");
});

test("should return 'Please enter a valid numerator and/or denominator' for inputs that are not numbers", () => {
    expect(getAngleType("string")).toBe("Please enter a valid numerator and/or denominator");
    expect(getAngleType(null)).toBe("Please enter a valid numerator and/or denominator");
    expect(getAngleType(undefined)).toBe("Please enter a valid numerator and/or denominator");
});
});