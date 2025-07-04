const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):

test("should return 7 for 7 of Hearts", () => {
  expect(getCardValue("7♥")).toEqual(7);
});

test("should return 10 for 10 of Diamonds", () => {
  expect(getCardValue("10♦")).toEqual(10);
});
// Case 3: Handle Face Cards (J, Q, K):

test("should return 10 for Jack of Clubs", () => {
  expect(getCardValue("J♣")).toEqual(10);
});

test("should return 10 for Queen of Hearts", () => {
  expect(getCardValue("Q♥")).toEqual(10);
});

test("should return 10 for King of Diamonds", () => {
  expect(getCardValue("K♦")).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace, (") => {const ace = getCardValue("A♠");
    expect(ace).toEqual(11);}


// Case 5: Handle Invalid Cards:
test("should throw error for invalid card rank", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});

test("should throw error for empty string", () => {
  expect(() => getCardValue("")).toThrow("Invalid card rank");
});
