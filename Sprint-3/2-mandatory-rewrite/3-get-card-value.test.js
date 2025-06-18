const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("Ace of Spades");
    expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 2-10 for Number Cards", () => {
    const numberCards = getCardValue("Number Cards");
    expect(numberCards).toEqual("2-10");
});


// Case 3: Handle Face Cards (J, Q, K):
test("should return J, Q, K for Face Cards", () => {
    const faceCards = getCardValue("Face Cards");
    expect(faceCards).toEqual("J, Q, K");
});

// Case 4: Handle Ace (A):
test("should return A for Ace", () => {
    const ace = getCardValue("Ace"); 
    expect(ace).toEqual("A");
});

// Case 5: Handle Invalid Cards:
