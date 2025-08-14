const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });


// Case 2: Handle Number Cards (2-10):
test("the output should return 5 for fiveofHeart", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5);
})


// Case 3: Handle Face Cards (J, Q, K):
test("the output should return 10 for tenofDiamond", () => {
    const tenofDiamond = getCardValue("10♦");
    expect(tenofDiamond).toEqual(10);
})
// Case 4: Handle Ace (A):
test("the output should return 10 for kingofClub", () => { 
    const kingofClub = getCardValue("J♣");
    expect(kingofClub).toEqual(10);
})
// Case 5: Handle Invalid Cards:
test("the output should throw an Error", () => {
expect(() => getCardValue("")).toThrow("Invalid card rank");
expect(() => getCardValue("X♦")).toThrow("Invalid card rank");
expect(() => getCardValue("1♠")).toThrow("Invalid card rank");
})

// The test ensures getCardValue correctly rejects invalid inputs.
//Arrow function () => getCardValue(...) is needed because directly calling getCardValue()
