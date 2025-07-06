const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    expect(getCardValue("A♠")).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 5 for Five of Hearts", () => {
    expect(getCardValue("5♥")).toEqual(5);
});
test('returns 10 for Ten of Diamonds', () => {
  expect(getCardValue('10♦')).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):
test.each(["K♣", "Q♦", "J♥"])(
  'returns 10 for %s',
  (card) => {
    expect(getCardValue(card)).toEqual(10);
  });

// Case 4: Handle Invalid Cards:
test("should throw an error for invalid card rank", () => {
    expect(() => getCardValue("Z♣")).toThrow("Invalid card rank.");
});
test("should throw an error for invalid card rank", () => {
    expect(() => getCardValue("11♠")).toThrow("Invalid card rank.");
});
