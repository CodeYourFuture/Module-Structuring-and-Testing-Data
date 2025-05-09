const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 2-10 for number card", () => {
    const fiveOfHearts = getCardValue("5♥");
    expect(fiveOfHearts).toEqual(5);
    });

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for J, K, Q  face card",()=>{
    const blackOfJacks =getCardValue("10");
    expect(blackOfJacks).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for ace card",()=>{
    const cardA =getCardValue("A");
    expect(cardA).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return Invalid for invalid input",()=>{
    const invalidCards =getCardValue("Invalid");
    expect(invalidCards).toEqual("Invalid")
});