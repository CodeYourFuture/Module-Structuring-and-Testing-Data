const isCardValid = require("./card-validator.js");
test("the final digit in the card must be even.", () => {
  // Arrange
  const card_number = 6666666666666662;
  // Act
  const result = isCardValid(card_number);
  // Assert
  expect(result).toEqual(true);
});

test("Number must be 16 digits, all of them must be numbers.", () => {
  // Arrange
  const card_number = 9999777788880000;
  // Act
  const result = isCardValid(card_number);
  // Assert
  expect(result).toEqual(true);
});

test("At least two different digits represented (all of the digits cannot be the same).", () => {
  // Arrange
  const card_number = 4444444444444440;
  // Act
  const result = isCardValid(card_number);
  // Assert
  expect(result).toEqual(true);
});

test("The sum of all the digits must be greater than 16.", () => {
  // Arrange
  const card_number = 1111111111111112;
  // Act
  const result = isCardValid(card_number);
  // Assert
  expect(result).toEqual(true);
});
