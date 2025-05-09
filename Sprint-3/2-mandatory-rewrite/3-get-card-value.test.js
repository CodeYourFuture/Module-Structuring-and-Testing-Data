const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
// Case 3: Handle Face Cards (J, Q, K):
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
test("should return 5 for 5♥", () => {
    expect(getCardValue("5♥")).toEqual(5);
});
test("should return 10 for Q♦", () => {
    expect(getCardValue("Q♦")).toEqual(10);
});
test("should return 11 for A♣", () => {
    expect(getCardValue("A♣")).toEqual(11);
});
test('should throw "Invalid card rank" for X♠', () => {
    expect(() => getCardValue("X♠")).toThrow("Invalid card rank");
    expect(() => getCardValue("010♠")).toThrow("Invalid card rank");
    expect(() => getCardValue("02♠")).toThrow("Invalid card rank");
    expect(() => getCardValue("0x02♠")).toThrow("Invalid card rank");
    expect(() => getCardValue("2.1♠")).toThrow("Invalid card rank");
});
