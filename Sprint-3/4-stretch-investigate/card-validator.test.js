// Implement a function cardNumberValidator
const cardNumberValidator = require("./card-validator");

// Given a cardNumber string and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case 1: check the card number has 16 digits
test("card number should be 16 digits", () => {
    expect(cardNumberValidator(1234567890123456)).toEqual(true);
});

// case 2: check all digits of the card number has to be numbers.
test("card number should contains only numeric digits", () => {
    expect(cardNumberValidator(a1111111b1111111)).toEqual(false);
});

// case 3: check the card number has at least 2 different digits
// test("card number should be 16 digits", () => {
//     expect(cardNumberValidator("1111111111111111")).toEqual(false);
// });
