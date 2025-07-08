const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test.each([...Array.from({length:11}, (_,i) => i.toString())])(
  'should return correct rank for card number %s', 
  (number) => {
    const result = getCardValue(`${number}♠`);
    expect(result).toEqual(Number(number));
  }
);

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for any valid face card", () => {
    const jackOfSpades = getCardValue("J♠");
    expect(jackOfSpades).toEqual(10);
});

// Case 4: Handle Ace (A):
// this is the same test as  in case 1 above, no?

// Case 5: Handle Invalid Card of length 2:
test("should throw error for any invalid cards entered", () => {
    const invalidCard = "D🕯";
    expect(() => getCardValue(invalidCard)).toThrow();
});

// Case 6: Handle Invalid Card of length >2:
test("should throw error for any invalid cards entered", () => {
    const invalidCard2 = "AD🕯";
    expect(() => getCardValue(invalidCard)).toThrow();
});


// Case 7: Trim spaces:
test("should return correct rank if string is padded with any spaces", () => {
    const spacesInCard = getCardValue("  A ♠   ");
    expect(spacesInCard).toEqual(11);
})


// Handle all unicode card symbols:
test.each(['♠', '♥', '♦', '♣'])(
  'should return correct rank for card with suit %s', 
  (suit) => {
    const result = getCardValue(`9${suit}`);
    expect(result).toEqual(9);
  }
);