const isValidNumber = require("./card-validator");

test('Should return false if the digits are not 16', () => {
    expect(isValidNumber(222222222222222)).toBe(false);
});

test('Should return false if the 16 digits are not all numbers', () => {
    expect(isValidNumber(222222222222222.)).toBe(false);
});

test('Should return false if the 16 digits are the same', () => {
    expect(isValidNumber(2222222222222222)).toBe(false);
});

test('Should return false if the final digit is not even', () => {
    expect(isValidNumber(2222222222222221)).toBe(false);
});

test('Should return false if the sum < 16', () => {
    expect(isValidNumber(1011111111111111)).toBe(false);
});




// - Number must be 16 digits, all of them must be numbers.
// - You must have at least two different digits represented (all of the digits cannot be the same).
// - The final digit must be even.
// - The sum of all the digits must be greater than 16.