const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10)
test("should return 7 for 7 of Diamonds", () => {
    const sevenOfDiamonds = getCardValue("7♦");
    expect(sevenOfDiamonds).toEqual(7);
});

// Case 3: Handle Face Cards (J, Q, K)
test("should return 10 for King of Hearts", () => {
    const kingOfHearts = getCardValue("K♥");
    expect(kingOfHearts).toEqual(10);
});

test("should return 10 for Queen of Clubs", () => {
    const queenOfClubs = getCardValue("Q♣");
    expect(queenOfClubs).toEqual(10);
});

test("should return 10 for Jack of Spades", () => {
    const jackOfSpades = getCardValue("J♠");
    expect(jackOfSpades).toEqual(10);
});

// Case 5: Handle Invalid Cards
test("should return null for an invalid card", () => {
    const invalidCard = getCardValue("Z♠");
    expect(invalidCard).toBeNull();
});