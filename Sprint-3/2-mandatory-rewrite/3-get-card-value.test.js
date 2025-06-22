const getCardValue = require("./3-get-card-value");

test("should return 11 for  Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });



test("should return rank for  Number Cards", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5);
    });

test("should return 10 for  Face Cards", () => {
    const facecards = getCardValue("Q♥");
    expect(facecards).toEqual(10);
    });

test("should return 11 for  AceCard", () => {
    const AceCard = getCardValue("A♥");
    expect(AceCard).toEqual(11);
    });

test('throws error for invalid card', () => {
  expect(() => getCardValue("ST")).toThrow("Invalid card rank.");
});
// Case 2: Handle Number Cards (2-10):
// Case 3: Handle Face Cards (J, Q, K):
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
