const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return the correct value for number cards between 2 and 9", () => {
    expect(getCardValue("2♥")).toEqual(2);
    expect(getCardValue("3♦")).toEqual(3);
    expect(getCardValue("4♣")).toEqual(4);
    expect(getCardValue("5♠")).toEqual(5);
    expect(getCardValue("6♥")).toEqual(6);
    expect(getCardValue("7♦")).toEqual(7);
    expect(getCardValue("8♣")).toEqual(8);
    expect(getCardValue("9♠")).toEqual(9);
    expect(getCardValue("10♥")).toEqual(10);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards (J, Q, K)", () => {
    expect(getCardValue("J♠")).toEqual(10);
    expect(getCardValue("Q♦")).toEqual(10);
    expect(getCardValue("K♣")).toEqual(10);
});
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
