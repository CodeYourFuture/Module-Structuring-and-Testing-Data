const getCardValue = require("./3-get-card-value");

const {test, expect} = require('@jest/globals')

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):

test("should return 2-10 for Handle Number Cards", () => {
    expect(getCardValue('2♠')).toEqual(2);
    expect(getCardValue('5♣')).toEqual(5);
    expect(getCardValue('9♦')).toEqual(9);
    expect(getCardValue('10♥')).toEqual(10);
    });

// Case 3: Handle Face Cards (J, Q, K):

test("should return 10 for Handle Face Cards", () => {
    expect(getCardValue('J♠')).toEqual(10);
    expect(getCardValue('Q♥')).toEqual(10);
    expect(getCardValue('K♣')).toEqual(10);
    });


// Case 4: Handle Ace (A):

test("should return 11 for Handle Ace (A)", () => {
    expect(getCardValue('A♦')).toEqual(11);
    });


// Case 5: Handle Invalid Cards:

test("should throw an error for Invalid Cards", () => {
    expect(() => getCardValue("🃏")).toThrow("Invalid Card rank");
});
   