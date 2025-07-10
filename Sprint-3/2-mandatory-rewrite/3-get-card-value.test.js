const getCardValue = require("./3-get-card-value");

// Case 2: Handle Number Cards (2-10):
test("should return 5 for 5 of Hearts", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Jack of Diamonds", () => {
    const jackOfDiamonds = getCardValue("J♦");
    expect(jackOfDiamonds).toEqual(10);
});
test("should return 10 for Queen of Clubs", () => {
    const queenOfClubs = getCardValue("Q♣");
    expect(queenOfClubs).toEqual(10);
});
test("should return 10 for King of Spades", () => {
    const kingOfSpades = getCardValue("K♠");
    expect(kingOfSpades).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Diamonds", () => {
    const aceOfDiamonds = getCardValue("A♦");
    expect(aceOfDiamonds).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card rank", () => {
    expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});
