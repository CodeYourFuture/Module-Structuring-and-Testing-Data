const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return number value for card 2-10", () => {
    const sevenofHearts = getCardValue("7♥");
    expect(sevenofHearts).toEqual(7);
    });

// Case 3: Handle Face Cards (J, Q, K):
test(" should return 10 for JQK cards", () => {
    const kingofDiamonds = getCardValue("K♦");
    expect(kingofDiamonds).toEqual(10);
});

// Case 4: Handle Ace (A):
test(" should return 11 for Ace cards", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test(" should return a message that card is not valid", () => {
    const ninetynineLove = getCardValue("99♥");
    expect(ninetynineLove).toEqual("Invalid card rank");
});
