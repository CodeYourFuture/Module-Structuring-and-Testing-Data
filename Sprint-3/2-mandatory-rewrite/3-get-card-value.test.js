const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });
test("should return 10 for Jack of Spades", () =>{
    const jackOfSpades = getCardValue("J♠");
    expect (jackOfSpades).toEqual(10);
});
test("should return 10 for Queen of Diamonds", () => {
    const queenOfDiamonds = getCardValue("Q♦");
    expect(queenOfDiamonds).toEqual(10);
});

test("should return 10 for King of Clubs", () => {
    const kingOfClubs = getCardValue("K♣");
    expect(kingOfClubs).toEqual(10);
});
test("should return 5 for 5 of Hearts", () => {
    const fiveOfHearts = getCardValue("5♥");
    expect(fiveOfHearts).toEqual(5);
});

test("should return 10 for 10 of Diamonds", () => {
    const tenOfDiamonds = getCardValue("10♦");
    expect(tenOfDiamonds).toEqual(10);
});
test("should throw error for invalid card rank", () => {
    try {
        getCardValue("Z♠");
    } catch (error) {
        expect(error.message).toEqual("Invalid card rank.");
    }
});


// Case 2: Handle Number Cards (2-10):
// Case 3: Handle Face Cards (J, Q, K):
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
