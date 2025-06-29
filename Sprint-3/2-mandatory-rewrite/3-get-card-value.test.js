const getCardValue = require("./3-get-card-value");



// Case 2: Handle Number Cards (2-10):
test("should return number for number cards (2-10)",() => {
    expect(getCardValue("2")).toEqual (2);
    expect(getCardValue("10")).toEqual(10);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Jack of Diamonds", () => {
    expect(getCardValue ("J")).toEqual(10);
});

test("should return 10 for Queen of Clubs", () => {
    expect(getCardValue("Q")).toEqual(10);
});

test("should return 10 for King of Spades", () => {
    expect(getCardValue("K")).toEqual(10);
});
    
// Case 4: Handle Ace (A):
test("should return 11 for Ace", () => {
    expect(getCardValue("A")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should throw error for invalid card rank", () => {
    expect(() => getCardValue("L")).toThrow(new Error("Invalid card rank"));
});

