const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 5 for 5 of Spades", () => {
    const aceOfSpades = getCardValue("5♠");
    expect(aceOfSpades).toEqual(5);
    });
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Q of Spades", () => {
    const aceOfSpades = getCardValue("Q♠");
    expect(aceOfSpades).toEqual(10);
    });
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
    });
// Case 5: Handle Invalid Cards:
test("should return Invalid card rank for Invalid Inputs", () => {
    const aceOfSpades = getCardValue("M♠");
    expect(aceOfSpades).toEqual("Invalid card rank");
    });
