const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10)
test("should return 5 for 5 of Hearts", () => {
  const fiveOfHearts = getCardValue("5♥");
  expect(fiveOfHearts).toEqual(5);
});

test("should return 10 for 10 of Clubs", () => {
  const tenOfClubs = getCardValue("10♣");
  expect(tenOfClubs).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K)
test("should return 10 for Jack of Diamonds", () => {
  expect(getCardValue("J♦")).toEqual(10);
});

test("should return 10 for Queen of Hearts", () => {
  expect(getCardValue("Q♥")).toEqual(10);
});

test("should return 10 for King of Spades", () => {
  expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: Handle Ace (already tested above)

// Case 5: Handle Invalid Cards
test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});
