const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 3 for 3♠ card", () => {
    const numberCards = getCardValue("3♠");
    expect(numberCards).toEqual(3);
});

test("should return 9 for 9♠", () => {
    const numberCards = getCardValue("9♠");
    expect(numberCards).toEqual(9);
});



// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for K♠ card", () => {
    const faceCards = getCardValue("K♠");
    expect(faceCards).toEqual(10);
});

test("should return 10 for Q♠ card", () => {
    const faceCards = getCardValue("Q♠");
    expect(faceCards).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace", () => {
    const ace = getCardValue("A"); 
    expect(ace).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should throw Invalid card rank for invalid cards", () => {

    let card = "Z♠"
    expect(() => getCardValue(card)).toThrow("Invalid card rank");
});

test("should throw Invalid card rank for invalid cards", () => {

    let card = "11♠"
    expect(() => getCardValue(card)).toThrow("Invalid card rank");
});
