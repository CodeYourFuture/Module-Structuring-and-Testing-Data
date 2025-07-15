const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):

test("should return the numeric value corresponding to the rank ", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5);
    });

// Case 3: Handle Face Cards (J, Q, K):

test("should return the value 10 ", () => {
    const qofHearts = getCardValue("Q♥");
    expect(qofHearts).toEqual(10);
    });

// Case 4: Handle Ace (A):

test("should return the value 11 ", () => {
    const aceofHeart = getCardValue("A♥");
    expect(aceofHeart).toEqual(11);
    });

// Case 5: Handle Invalid Cards:

test("should return Invalid card rank ", () => {
    const invalid = getCardValue("-1");
    expect(invalid).toEqual('Invalid card rank.');
    });

test("should return the value 10 for 10 of hearts ", () => {
    const tenOfHearts = getCardValue("10♥");
    expect(tenOfHearts).toEqual(10);
    });

test("should return the value Invalid card rank for value of 22", () => {
    const twentyTwo = getCardValue("22");
    expect(twentyTwo).toEqual("Invalid card rank.");
    });