const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return rank for Number Cards (2-10)", () => {
    const numberCards = getCardValue("7♠");
    for ( let i = 2; i < 11; i++){
        expect(getCardValue(i + "♠")).toEqual(i);
        expect(getCardValue(i + "♣")).toEqual(i);
        expect(getCardValue(i + "♥")).toEqual(i);
        expect(getCardValue(i + "♦")).toEqual(i);
    }
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 Face Cards (J, Q, K)", () => {
    const faceCards = getCardValue("J");
    expect(faceCards).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace (A)", () => {
    const aceCard = getCardValue("A");
    expect(aceCard).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return error for invalid Cards", () => {
    expect(() => {
        getCardValue("Z");
    }).toThrow("Invalid card rank.");
});