const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return number for number cards (2-10)", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);

  const tenofClubs = getCardValue("10♣");
  expect(tenofClubs).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards J, Q, K", () => {
  expect(getCardValue("J♦")).toEqual(10);
  expect(getCardValue("Q♣")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: Handle Ace (A):
// (Already tested above with "A♠")

// Case 5: Handle Invalid Cards:
test("should throw error for invalid cards", () => {
  expect(() => getCardValue("1♠")).toThrow("Invalid card rank.");
  expect(() => getCardValue("Z♥")).toThrow("Invalid card rank.");
});
