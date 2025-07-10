const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

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
// Case 5: Handle Invalid Cards:
