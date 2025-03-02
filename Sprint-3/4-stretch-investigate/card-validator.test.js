const isValidNumber = require("./card-validator");

test('Should return false if the 16 digits are the same', () => {
    expect(isValidNumber(2222222222222222)).toBe(false);
});

test('Should return false if the 16 digits are the same', () => {
    expect(isValidNumber(1011111111111111)).toBe(false);
});