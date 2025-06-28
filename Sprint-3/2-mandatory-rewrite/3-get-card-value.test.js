const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 2 for 2 of Hearts", () => {
  const twoOfHearts = getCardValue("2♥");
  expect(twoOfHearts).toEqual(2);
});

test("should return 10 for 10 of Diamonds", () => {
  const tenOfDiamonds = getCardValue("10♦");
  expect(tenOfDiamonds).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Jack of Clubs", () => {
  const jackOfClubs = getCardValue("J♣");
  expect(jackOfClubs).toEqual(10);
});
test("should return 10 for Queen of Hearts", () => {
  const queenOfHearts = getCardValue("Q♥");
  expect(queenOfHearts).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Diamonds", () => {
  const aceOfDiamonds = getCardValue("A♦");
  expect(aceOfDiamonds).toEqual(11);
});
test("should return 11 for Ace of Clubs", () => {
  const aceOfClubs = getCardValue("A♣");
  expect(aceOfClubs).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card");
});
test("should throw an error for empty card", () => {
  expect(() => getCardValue("")).toThrow("Invalid card");
});
