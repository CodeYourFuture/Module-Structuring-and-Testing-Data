const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 6 for 6 of Hearts", () => {
    const sixOfHearts = getCardValue("2♥");
    expect(sixOfHearts).toEqual(2);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for King of Diamonds", () => {
    const kingOfDiamonds = getCardValue("K♦");
    expect(kingOfDiamonds).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Clubs", () => {
    const aceOfClubs = getCardValue("A♣");
    expect(aceOfClubs).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card rank", () => {
    expect(() => getCardValue("Z♠")).toThrow("Invalid card rank.");
});

