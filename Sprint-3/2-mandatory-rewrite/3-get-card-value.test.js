const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return for 5 for fiveofHearts", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5);
    });

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for queenofHearts", () => {
    const queenofHearts = getCardValue("Q♥");
    expect(queenofHearts).toEqual(10);
    });

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });


    
// Case 5: Handle Invalid Cards:
test("should throw an error for an invalid card", () => {
    expect(() => getCardValue("M♥")).toThrow("Invalid card rank");
});