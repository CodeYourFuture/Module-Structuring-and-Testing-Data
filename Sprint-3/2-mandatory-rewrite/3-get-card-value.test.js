const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("Should return 5 for 5 of Hearts", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5);
})
// Case 3: Handle Face Cards (J, Q, K):
test("Should return 10 for King of Diamonds", () => {
    const kingOfDiamonds = getCardValue("K♦");
    expect(kingOfDiamonds).toEqual(10);
});
// Case 4: Handle Ace (A):
test("Should return 11 for Ace", () => {
    const aceOfClubs = getCardValue("A♣");
    expect(aceOfClubs).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("Should return 'Invalid card rank.' for invalid card", () => {
    const invalidCard = getCardValue("Z♣");
    expect(invalidCard).toEqual("Invalid card rank.");
});
