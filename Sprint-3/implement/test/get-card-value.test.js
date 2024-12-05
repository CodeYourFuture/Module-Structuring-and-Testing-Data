const getCardValue = require('../get-card-value');

test('Return correct value of card', () => {
  expect(getCardValue("3♠")).toBe(3);
  expect(getCardValue("10♠")).toBe(10);
  expect(getCardValue("J♥")).toBe(10);
  expect(getCardValue("A♠")).toBe(11);
  expect(() => {getCardValue("1♦")}).toThrow("Invalid card rank");
});