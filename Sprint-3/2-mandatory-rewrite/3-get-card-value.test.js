const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return number for number cards", () => {
    for (let i = 2; i <= 10; i++) {
        const card = `${i}♥`; 
        expect(getCardValue(card)).toEqual(i);
    }
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face Cards", () => {
    expect(getCardValue("J♠")).toEqual(10);
    expect(getCardValue("Q♠")).toEqual(10);
    expect(getCardValue("K♠")).toEqual(10);
    });

// Case 4: Handle Ace (A):
test("should return 11 for Ace Cards", () => {
    const aceCard = getCardValue("A");
    expect(aceCard).toEqual(11);
    });

// Case 5: Handle Invalid Cards:
test("should return Invalid for Invalid Cards", () => {
    expect(getCardValue("ABC♠")).toEqual("Invalid card rank");
    expect(getCardValue("100♠")).toEqual("Invalid card rank");
    expect(getCardValue("2.1♠")).toEqual("Invalid card rank");
    });

