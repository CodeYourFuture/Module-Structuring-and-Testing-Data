const getCardValue = require("./3-get-card-value");
// const getCardValue = require("../1-key-implement/3-get-card-value");


test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 5 for Five of Hearts", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5);
    });

    //We also can write the testing in shorter way, compare line 17 (the shorter version) with 11 (the longer version) as example.
    test("should return 10 for Ten of Diamonds", () => {
        expect(getCardValue("10♦")).toEqual(10);
    });


// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for King of Clubs", () => {
    const kingOfClubs= getCardValue("K♣");
    expect(kingOfClubs).toEqual(10);
    });

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Diamonds", () => {
    const aceofDiamonds = getCardValue("A♦");
    expect(aceofDiamonds).toEqual(11);
    });

// Case 5: Handle Invalid Cards:
test("should return 'Invalid card rank.' for invalid card", () => {
    const invalidCard = getCardValue("X♦");
    expect(invalidCard).toEqual("Invalid card rank.");
    });

