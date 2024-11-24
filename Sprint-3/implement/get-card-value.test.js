 //When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value/ Function ***ParseInt**

const getCardValue = require("./get-card-value");

test(`card string input returns number`, function () {
  const currentInput = getCardValue("10♣");
  const targetInput = (10);
  expect(currentInput).toBe(targetInput);
});


// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

test(`card string input returns number`, function () {
  const currentInput = getCardValue("2♣");
  const targetInput = (2);
  expect(currentInput).toBe(targetInput);
});

test(`card string input returns number`, function () {
  const currentInput = getCardValue("9♠");
  const targetInput = (9);
  expect(currentInput).toBe(targetInput);
});

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.


test(`card string input returns number`, function () {
  const currentInput = getCardValue("Q♥");
  const targetInput = (10);
  expect(currentInput).toBe(targetInput);
});

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

test(`card string input returns number`, function () {
  const currentInput = getCardValue("A");
  const targetInput = (NaN);
  expect(currentInput).toBe(targetInput);
});