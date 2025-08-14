const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 7 for Seven of Hearts", () => {
  expect(getCardValue("7♥")).toEqual(7);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Queen of Diamonds", () => {
  expect(getCardValue("Q♦")).toEqual(10);
});
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:(already covered in the first test)
test("should throw error for invalid card rank", () => {
  expect(() => getCardValue("Z♣")).toThrow("Invalid card rank");
});
