const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });
// Case 2: Handle Number Cards (2-10)
test("should return 5 for 5 of Hearts", () => {
    const five = getCardValue("5♥");
    expect(five).toEqual(5);
});

test("should return 10 for 10 of Diamonds", () => {
    const ten = getCardValue("10♦");
    expect(ten).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K)
test("should return 10 for Jack of Spades", () => {
    const jack = getCardValue("J♠");
    expect(jack).toEqual(10);
});

test("should return 10 for Queen of Clubs", () => {
    const queen = getCardValue("Q♣");
    expect(queen).toEqual(10);
});

test("should return 10 for King of Hearts", () => {
    const king = getCardValue("K♥");
    expect(king).toEqual(10);
});

// Case 4: Handle Ace 
 const AceCard = getCardValue("A");
assertEquals(AceCard ("A"), 11);

// Case 5: Handle Invalid Cards
test("should throw error for invalid card Z♠", () => {
    expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});

