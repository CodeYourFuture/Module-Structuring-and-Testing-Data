const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 2-10 for cards rank (2-10)", () => {
    expect(getCardValue("2♠")).toEqual(2);
    expect(getCardValue("9♣︎")).toEqual(9);
    expect(getCardValue("7♠")).toEqual(7);
});




// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards (J, Q, K)", () => {
    expect(getCardValue("J♣︎")).toEqual(10);
    expect(getCardValue("Q♠")).toEqual(10);
    expect(getCardValue("K♣︎")).toEqual(10);
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
