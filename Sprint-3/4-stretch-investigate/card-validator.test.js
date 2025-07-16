// Implement a function cardNumberValidator
const cardNumberValidator = require("./card-validator");

// Given a cardNumber string and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case 1: check the card number has 16 digits
test("card number should be 16 digits", () => {
    expect(cardNumberValidator("12345678901234560")).toEqual(false);
});

// case 2: check all digits of the card number has to be numbers.
test("card number should contains only numeric digits", () => {
    expect(cardNumberValidator("a1111111b1111111")).toEqual(false);
});

// case 3: check the card number has at least 2 different digits
test("card number should have at least 2 different digits", () => {
    expect(cardNumberValidator("1111111111111111")).toEqual(false);
});

// case 4: check the card number has at least 2 different digits
test("The sum of all digits should be grater than 16", () => {
    expect(cardNumberValidator("0000000000000022")).toEqual(false);
});

// case 5: check the card number has at least 2 different digits
test("The final digits should be even", () => {
    expect(cardNumberValidator("1234567891234561")).toEqual(false);
});

// case 6: "valid card number should return true"
test("valid card number should return true", () => {
  expect(cardNumberValidator("1234567890123468")).toEqual(true);
});


