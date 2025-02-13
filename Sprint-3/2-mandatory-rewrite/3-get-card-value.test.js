const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("Should be able to handle Number Cards (2 -10)", () => {
    const sevenSpades = getCardValue("7♠");
    expect(sevenSpades).toEqual(7);
});
// Case 3: Handle Face Cards (J, Q, K):
test("Should be able to handle Face Cards (J, Q, K)", () => {
    const QueenOfSpade = getCardValue("Q♠");
    expect(QueenOfSpade).toEqual(10);
});
// Case 4: Handle Ace (A):
test("Should be able to Handle Ace (A)", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("Should be able to handle Invalid Cards (V100)", () => {
    const invalidCard = getCardValue("V100");
    expect(invalidCard).toBe("Invalid input");
});