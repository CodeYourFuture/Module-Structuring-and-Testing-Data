const validateCreditCardNumber = require("./card-validator");

test("Number must be 16 digits, all of them must be numbers.", () => {
  // Arrange
  const cardNumber = 1234567890123456;
  // Act
  const result = validateCreditCardNumber(cardNumber);
  // Assert
  expect(result).toEqual(true);
});

test("Credit card number must have at least two different digits.", () => {
  // Arrange
  const cardNumber = 6262826262628262;
  // Act
  const result = validateCreditCardNumber(cardNumber);
  // Assert
  expect(result).toEqual(true);
});

test("Credit card with only one repeating digit is invalid.", () => {
  // Arrange
  const cardNumber = 8888888888888888;
  // Act
  const result = validateCreditCardNumber(cardNumber);
  // Assert
  expect(result).toEqual(false);
});

test("Credit card number cannot have an odd last digit.", () => {
  // Arrange
  const cardNumber = 1234567890123457;
  // Act
  const result = validateCreditCardNumber(cardNumber);
  // Assert
  expect(result).toEqual(false);
});

test("Credit card number sum of all digits cannot be less than or equal to 16.", () => {
  // Arrange
  const cardNumber = 1000000000000000;
  // Act
  const result = validateCreditCardNumber(cardNumber);
  // Assert
  expect(result).toEqual(false);
});

test("Credit card number sum of all digits must be greater than 16.", () => {
  // Arrange
  const cardNumber = 1234567890123452;
  // Act
  const result = validateCreditCardNumber(cardNumber);
  // Assert
  expect(result).toEqual(true);
});

test("Credit card number must not be negative.", () => {
  // Arrange
  const cardNumber = -1234567890123456;
  // Act
  const result = validateCreditCardNumber(cardNumber);
  // Assert
  expect(result).toEqual(false);
});

test("Credit card number must be a number.", () => {
  // Arrange
  const cardNumber = "1234567890123456";
  // Act
  const result = validateCreditCardNumber(cardNumber);
  // Assert
  expect(result).toEqual(false);
});

test("Credit card number must have exactly 16 digits.", () => {
  // Arrange
  const cardNumber = 212222222212222;
  // Act
  const result = validateCreditCardNumber(cardNumber);
  // Assert
  expect(result).toEqual(false);
});

test("Credit card number cannot have less or more than 16 digits.", () => {
  // Arrange
  const cardNumber = 212222222212222;
  // Act
  const result = validateCreditCardNumber(cardNumber);
  // Assert
  expect(result).toEqual(false);
});
