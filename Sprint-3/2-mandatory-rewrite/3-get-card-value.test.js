const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return the number for number cards", () => {
    const nineOfSpades = getCardValue("9♠");
    expect(nineOfSpades).toEqual(9);
});


// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for any valid face card", () => {
    const jackOfSpades = getCardValue("J♠");
    expect(jackOfSpades).toEqual(10);
});

// Case 4: Handle Ace (A):
// this is the same test as  in case 1 above, no?

// Case 5: Handle Invalid Cards:
test("should throw error for any invalid cards entered", () => {
    //how do you test that a console.error was logged?!
});
