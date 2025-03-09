const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):

test("should return 2 for 2 of Hearts", () => {
    expect(getCardValue("2♥")).toEqual(2);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Jack of Diamonds", () => {
    expect(getCardValue("J♦")).toEqual(10);
});

test("should return 10 for Queen of Clubs", () => {
    expect(getCardValue("Q♣")).toEqual(10);
});

test("should return 10 for King of Spades", () => {
    expect(getCardValue("K♠")).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
    expect(getCardValue("A♠")).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should throw an error for empty string", () => {
    expect(() => getCardValue("1")).toThrow("Invalid card value");
});
test("should throw an error for invalid card", () => {
    expect(() => getCardValue("X")).toThrow("Invalid card value");
});

test("should throw an error for empty string", () => {
    expect(() => getCardValue("")).toThrow("Invalid card value");
});