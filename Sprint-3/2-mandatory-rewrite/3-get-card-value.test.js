const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return number for number cards", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5);
    });

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face Cards", () => {
    const faceCard = getCardValue("J♠");
    expect(faceCard).toEqual(10);
    });

// Case 4: Handle Ace (A):
test("should return 11 for Ace Cards", () => {
    const aceCard = getCardValue("A");
    expect(aceCard).toEqual(11);
    });

// Case 5: Handle Invalid Cards:
test("should return Invalid for Invalid Cards", () => {
    const invalidCards = getCardValue("♠");
    expect(invalidCards).toEqual("Invalid card rank");
    });

