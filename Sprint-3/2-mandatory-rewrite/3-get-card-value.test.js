const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 2 for 2 of Hearts", () => {
    const twoOfHearts = getCardValue("2♥");
    expect(twoOfHearts).toEqual(2);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Jack of Diamonds", () => {
    const jackOfDiamonds = getCardValue("J♦");
    expect(jackOfDiamonds).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card rank", () => {
    expect(() => getCardValue("Z♣")).toThrow("Invalid card rank.");
});
