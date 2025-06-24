const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):

test("should return 5 for Five of Hearts", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
});

test("should return 4 for Four of Hearts", () => {
  const fourofHearts = getCardValue("4♥");
  expect(fourofHearts).toEqual(4);
});

// Case 3: Handle Face Cards (J, Q, K):

test("should return 10 for Ten of Diamonds", () => {
  const tenofDiamonds = getCardValue("10♦");
  expect(tenofDiamonds).toEqual(10);
});

test("should return 10 for Value of J", () => {
  const valueofJ = getCardValue("J♠");
  expect(valueofJ).toEqual(10);
});

test("should return 10 for Value of Q", () => {
  const valueofQ = getCardValue("Q♥");
  expect(valueofQ).toEqual(10);
});

test("should return 10 for Value of K", () => {
  const valueofK = getCardValue("K♣");
  expect(valueofK).toEqual(10);
});

// Case 4: Handle Ace (A):

test("should return 11 for All Ace", () => {
  const allAce = getCardValue("A♠");
  expect(allAce).toEqual(11);
});

// Case 5: Handle Invalid Cards:

test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});
