 const getCardValue = require("./3-get-card-value");



// Case 2: Handle Number Cards (2-10):
test("should return 5 for 5 of Diamonds", () => {
    const fiveOfDiamonds = getCardValue("5♦");
    expect(fiveOfDiamonds).toEqual(5);
});
test("should return 10 for 10 of Diamonds", () => {
    const tenOfDiamonds = getCardValue("10♦");
    expect(tenOfDiamonds).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face Cards", () => {
    const faceCards = getCardValue("K♣");
    expect(faceCards).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return 0 for invalid card '1♠'", () => {
    const invalidCard = getCardValue("1♠"); 
    expect(invalidCard).toEqual(0);
});

test("should return 0 for invalid input 'Z♠'", () => {
    const invalidInput = getCardValue("Z♠"); 
    expect(invalidInput).toEqual(0);
});

test("should return 0 for empty string", () => {
    const emptyString = getCardValue(""); 
    expect(emptyString).toEqual(0);
}); 