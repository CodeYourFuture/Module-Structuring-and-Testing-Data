const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return correct values for number cards (2-10)", () => {
  const twoOfHearts = getCardValue("2♥");
  expect(twoOfHearts).toEqual(2);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards (J, Q, K)", () => {
  const kingofHearts = getCardValue("K♥");
  expect(kingofHearts).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace", () => {
  const aceOfClubs = getCardValue("A♣");
  expect(aceOfClubs).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card ranks", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});
