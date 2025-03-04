const getCardValue = require("./3-get-card-value");

// Case 1: Handle Ace (A)
test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10)
test("should return the correct value for 2-10 cards", () => {
    expect(getCardValue("2♠")).toEqual(2);
    expect(getCardValue("3♠")).toEqual(3);
    expect(getCardValue("4♠")).toEqual(4);
    expect(getCardValue("5♠")).toEqual(5);
    expect(getCardValue("6♠")).toEqual(6);
    expect(getCardValue("7♠")).toEqual(7);
    expect(getCardValue("8♠")).toEqual(8);
    expect(getCardValue("9♠")).toEqual(9);
    expect(getCardValue("10♠")).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K)
test("should return 10 for Face Cards (J, Q, K)", () => {
    expect(getCardValue("J♠")).toEqual(10);
    expect(getCardValue("Q♠")).toEqual(10);
    expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: Handle Invalid Cards
test("should return 'Invalid card' for non-card inputs", () => {
    expect(getCardValue("1♠")).toEqual("Invalid card");
    expect(getCardValue("X♠")).toEqual("Invalid card");
    expect(getCardValue("♣")).toEqual("Invalid card");
});
