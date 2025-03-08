const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
// Case 3: Handle Face Cards (J, Q, K):
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
});

test("should return 2 for Two of Hearts", () => {
    const twoOfHearts = getCardValue("2♥");
    expect(twoOfHearts).toEqual(2);
});

test("should return 10 for Ten of Diamonds", () => {
    const tenOfDiamonds = getCardValue("10♦");
    expect(tenOfDiamonds).toEqual(10);
});

test("should return 10 for Jack of Clubs", () => {
    const jackOfClubs = getCardValue("J♣");
    expect(jackOfClubs).toEqual(10);
});

test("should return 10 for Queen of Spades", () => {
    const queenOfSpades = getCardValue("Q♠");
    expect(queenOfSpades).toEqual(10);
});

test("should return 10 for King of Hearts", () => {
    const kingOfHearts = getCardValue("K♥");
    expect(kingOfHearts).toEqual(10);
});

test("should return 11 for Ace of Diamonds", () => {
    const aceOfDiamonds = getCardValue("A♦");
    expect(aceOfDiamonds).toEqual(11);
});

test("should throw an error for invalid card '1♠'", () => {
    expect(() => getCardValue("1♠")).toThrow("Invalid card rank");
});

test("should throw an error for invalid card 'J♠♠'", () => {
    expect(() => getCardValue("J♠♠")).toThrow("Invalid card format");
});

test("should throw an error for invalid card with no rank", () => {
    expect(() => getCardValue("♠")).toThrow("Invalid card format");
});
