const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("return the numeric value corresponding to the rank for 2-10", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5);
    });

// Case 3: Handle Face Cards (J, Q, K):
test("return the value of 10 for J, Q, K", () => {
    const kingofSpades = getCardValue("K♠");
    expect(kingofSpades).toEqual(10);
    });

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades single string", () => {
    const ace = getCardValue("A");
    expect(ace).toEqual(11);
    });

test("should throw an error for invalid rank", () => {
    // Case 5: Handle Invalid Cards:
    const invalid = getCardValue("?");
    expect(invalid).toEqual('Invalid card rank');
});
    
