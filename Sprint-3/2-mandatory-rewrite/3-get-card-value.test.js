const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return the number for 2 of Spades", () => {
    expect(getCardValue("2♠")).toEqual(2);
});
test("should return the number for 5 of Hearts", () => {
    expect(getCardValue("5♥")).toEqual(5);
});
test("should return the number for 10 of Diamonds", () => {
    expect(getCardValue("10♦")).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Jack of Clubs", () => {
    expect(getCardValue("J♣")).toEqual(10);
});
test("should return 10 for Queen of Hearts", () => {
    expect(getCardValue("Q♥")).toEqual(10);
});
test("should return 10 for King of Spades", () => {
    expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Clubs", () => {
    expect(getCardValue("A♣")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return 'Invalid card' for an invalid card", () => {
    expect(getCardValue("1♠")).toEqual("Invalid card");
});
test("should return 'Invalid card' for a non-existent card", () => {
    expect(getCardValue("X♠")).toEqual("Invalid card");
});
