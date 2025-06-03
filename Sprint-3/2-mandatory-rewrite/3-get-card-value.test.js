const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("returns the numeric value for number cards (2-10)", function () {
  expect(getCardValue("2♠")).toBe(2);
  expect(getCardValue("10♥")).toBe(10);
  expect(getCardValue("7♦")).toBe(7);
});
// Case 3: Handle Face Cards (J, Q, K):
test("returns 10 for face cards (J, Q, K)", function () {
  expect(getCardValue("J♠")).toBe(10);
  expect(getCardValue("Q♥")).toBe(10);
  expect(getCardValue("K♦")).toBe(10);
});
// Case 4: Handle Ace (A):
test("returns 11 for Ace", function () {
  expect(getCardValue("A♠")).toBe(11);
});
// Case 5: Handle Invalid Cards:
test("throws error for invalid card ranks", function () {
  expect(getCardValue("X♠")).toBe("Invalid card rank");
  expect(getCardValue("11♣")).toBe("Invalid card rank");
  expect(getCardValue("#♦")).toBe("Invalid card rank");
}); 
