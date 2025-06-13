/*
Card Validation
A program that check if a card is valid and returns a boolean

To be valid, a card must:
- Be 16 digits and all numbers
- Have at least two different digits
- Last digit must be even
- Sum of all digits must be greater than 16
*/
const isValidCard = require("./card-validator");

test("card number is valid with all rules passed", () => {
  const cardNumber = "9999777788880000";
  const result = isValidCard(cardNumber);
  expect(result).toEqual(true);
});

test("card number is invalid if contains non-digit characters", () => {
  const cardNumber = "a92332119c011112";
  const result = isValidCard(cardNumber);
  expect(result).toEqual(false);
});

test("card number is invalid if all digits are the same", () => {
  const cardNumber = "4444444444444444";
  const result = isValidCard(cardNumber);
  expect(result).toEqual(false);
});

test("card number is invalid if sum of digits is 16 or less", () => {
  const cardNumber = "1111111111111110";
  const result = isValidCard(cardNumber);
  expect(result).toEqual(false);
});

test("card number is invalid if last digit is odd", () => {
  const cardNumber = "6666666666666661";
  const result = isValidCard(cardNumber);
  expect(result).toEqual(false);
});
