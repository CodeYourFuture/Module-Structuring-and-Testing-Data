// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

const getCardValue = require('./get-card-value');

test('Return correct value of card', () => {
  expect(getCardValue("3♠")).toEqual("3");
  expect(getCardValue("10♠")).toEqual("10");
  expect(getCardValue("J♥")).toEqual("10");
  expect(getCardValue("A♠")).toEqual("11");
});