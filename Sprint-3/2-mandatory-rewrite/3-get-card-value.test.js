const getCardValue = require("./3-get-card-value");

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 3 for 3 of clubs", () => {
    const threeOfClubs = getCardValue("3♣");
    expect (threeOfClubs).toEqual(3);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for King of Hearts and Queen of Diamonds", () => {
    const kingOfHearts = getCardValue("K♥");
    expect(kingOfHearts).toEqual(10);
    const queenOfDiamonds = getCardValue("Q♦");
    expect(queenOfDiamonds).toEqual(10);
});


// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card", () => {
    expect(() => getCardValue("Z♠")).toThrow("Invalid card rank."); //not sure how to write this test
});