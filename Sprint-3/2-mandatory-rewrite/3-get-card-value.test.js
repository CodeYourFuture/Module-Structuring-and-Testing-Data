const getCardValue = require("./3-get-card-value");

// Test Ace cards
test("should return 11 for Ace cards", () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♣")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
});

// Test number cards (2-10)
test("should return number for number cards (2-10)", () => {
  expect(getCardValue("2♦")).toEqual(2);
  expect(getCardValue("5♣")).toEqual(5);
  expect(getCardValue("10♥")).toEqual(10);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("10♣")).toEqual(10);
});

// Test face cards (J, Q, K)
test("should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("J♦")).toEqual(10);
  expect(getCardValue("Q♣")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♣")).toEqual(10);
});

// Test invalid cards throw errors
test("should throw an error for invalid cards", () => {
  expect(() => getCardValue("1♠")).toThrow("Invalid card rank.");
  expect(() => getCardValue("Z♦")).toThrow("Invalid card rank.");
  expect(() => getCardValue("15♥")).toThrow("Invalid card rank.");
  expect(() => getCardValue("X♣")).toThrow("Invalid card rank.");
});
