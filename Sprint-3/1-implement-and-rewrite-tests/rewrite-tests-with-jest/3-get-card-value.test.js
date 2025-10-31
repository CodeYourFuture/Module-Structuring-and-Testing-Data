const getCardValue = require("../implement/3-get-card-value");

// Case 1: Handle Number Cards (2-10)
test("should return the value of number cards (2-10)", () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("10♦")).toEqual(10);
});

// Case 2: Handle Face Cards (J, Q, K)
test("should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♣")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

// Case 3: Handle Ace (A)
test("should return 11 for Ace cards", () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
});

// Case 4: Handle Invalid Cards
test("should return 'Invalid card rank.' for invalid cards", () => {
  expect(getCardValue("z♣")).toEqual("Invalid card rank.");
  expect(getCardValue("11♠")).toEqual("Invalid card rank.");
});
