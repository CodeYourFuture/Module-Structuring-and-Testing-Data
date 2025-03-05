const cardValidator = require("./card-validator");

test("Card number, meets all requirements", () => {
  const cardNum = 9999777788880000;
  const result = cardValidator(cardNum);
  expect(result).toBe(true);
});

test("Invalid card number, card number must be 16 digits", () => {
  
  const cardNum = 92011112;
  const result = cardValidator(cardNum);
  expect(result).toBe(false);
});

test("Invalid card number, must have at least two different digits represented", () => {
    const cardNum = 4444444444444444;
    const result = cardValidator(cardNum);
    expect(result).toBe(false);
});

test("Invalid card number, the final digit must be even", () => {
    const cardNum = "6222666567666615";
    const result = cardValidator(cardNum);
    expect(result).toBe(false);
});

test("Invalid card number, the sum of all the digits must be greater than 16", () => {
    const cardNum = "1111111111111110";
    const result = cardValidator(cardNum);
    expect(result).toBe(false);
});

