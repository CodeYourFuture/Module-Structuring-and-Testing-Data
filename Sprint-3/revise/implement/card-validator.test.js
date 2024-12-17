const {validateCard} = require('./card-validator');
describe ("validateCard function", () => {

//Typical cases

test("should return false if input is not equal to 16 digits", () => {
        expect(validateCard("12345")).toBe(false);
});

test("should return false if input contains other characters that are not numbers", () => {
    expect(validateCard("a92332119c011112")).toBe(false);
    expect(validateCard("12345$7890123456")).toBe(false);
});

test("should return false if input does not contain at least 2 different digits", () => {
    expect(validateCard("1111111111111111")).toBe(false);
    expect(validateCard("0000000000000000")).toBe(false);
});

test("should return false if the last digit is not even", () => {
    expect(validateCard("1111111111111113")).toBe(false);
    expect(validateCard("0000000000000005")).toBe(false);
});

test("should return false if the sum of the digits are less than 16", () => {
    expect(validateCard("1010101010101010")).toBe(false);
    expect(validateCard("0000000011111111")).toBe(false);
});

test("should return true if all conditions are met", () => {
    expect(validateCard("1234567891011122")).toBe(true);
    expect(validateCard("2468846212341234")).toBe(true);
});

})