const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const ace_of_Spades = getCardValue("A♠");
  expect(ace_of_Spades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 5 for five_of_Hearts", () => {
  const five_of_Hearts = getCardValue("5♥");
  expect(five_of_Hearts).toEqual(5);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 5 for Q_of_Hearts", () => {
  const Q_of_Hearts = getCardValue("Q♥");
  expect(Q_of_Hearts).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace_of_Hearts", () => {
  const Ace_of_Hearts = getCardValue("A♥");
  expect(Ace_of_Hearts).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return null for invalid_rank", () => {
  const invalid_rank = getCardValue("--");
  expect(invalid_rank).toEqual(null);
});
