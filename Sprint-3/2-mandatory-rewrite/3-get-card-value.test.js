const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return according values for Number Cards (2-10)", () => {
    expect(getCardValue("10♠")).toEqual(10);
    expect(getCardValue("2♦")).toEqual(2);
    expect(getCardValue("9♣")).toEqual(9);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face Cards (J, Q, K)", () => {
    expect(getCardValue("J♠")).toEqual(10);
    expect(getCardValue("Q♦")).toEqual(10);
    expect(getCardValue("K♣")).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace Cards ", () => {
    expect(getCardValue("A♠")).toEqual(11);
    expect(getCardValue("A♦")).toEqual(11);
    expect(getCardValue("A♣")).toEqual(11);
});
// Case 5: Handle Invalid Cards suits:
test("should return error for invalid Card suits", () => {
    expect(() => {
        getCardValue("Z");
    }).toThrow("Invalid card suit.");
    expect(() => {
        getCardValue("7#");
    }).toThrow("Invalid card suit.");
});
// Case 6: Handle Invalid Cards faces:
test("should return error for invalid Card faces", () => {
    expect(() => {
        getCardValue("Z♠");
    }).toThrow("Invalid card face.");
    expect(() => {
        getCardValue("@♦");
    }).toThrow("Invalid card face.");
});
// Case 7: Handle Invalid Card numbers:
test("should return error for invalid Card numbers", () => {
    expect(() => { getCardValue("23♠") }).toThrow("Invalid card number.");
    expect(() => { getCardValue("3.1416♥") }).toThrow("Invalid card number.");
    expect(() => { getCardValue("00003♥") }).toThrow("Invalid card number.");
    expect(() => { getCardValue("3e0♥") }).toThrow("Invalid card number.");
});

