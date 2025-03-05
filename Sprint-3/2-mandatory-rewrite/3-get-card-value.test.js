const { default: expect } = require("expect");
const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):

test("should handle number cards", () => {
    const cardNum = getCardValue("2♠");
    expect(cardNum).toEqual(2);
});
console.log(getCardValue("8♥")); 
// Case 3: Handle Face Cards (J, Q, K):

test("should handle all face cards", () => {
    expect(getCardValue("J♠")).toEqual(10);
});

// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
