const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return numeric value corresponding to the rank", () => {
    const fiveofHearts = getCardValue("5♥"); 
    expect(fiveofHearts).toEqual(5);
})
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for J, Q, K, as these cards are worth 10 points each in blackjack.", () => {
    const faceCards = getCardValue("J♠")
    expect(faceCards).toEqual(10);
})
// Case 4: Handle Ace (A):
test("should return 11 as Ace as worth 11 points", () => {
    const aceCard = getCardValue("Ace♦")
    expect(aceCard).toEqual(11);
})
// Case 5: Handle Invalid Cards:
