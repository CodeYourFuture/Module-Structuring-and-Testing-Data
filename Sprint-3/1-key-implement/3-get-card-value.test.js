const getCardValue = require("./3-get-card-value");

test("Handles Ace correctly", () => {
  expect(getCardValue("A♠")).toBe(11);
});

test("Handles Number Cards correctly", () => {
  expect(getCardValue("5♥")).toBe(5);
  expect(getCardValue("9♦")).toBe(9);
});

test("Handles Face Cards and 10 correctly", () => {
  expect(getCardValue("J♣")).toBe(10);
  expect(getCardValue("Q♥")).toBe(10);
  expect(getCardValue("K♠")).toBe(10);
  expect(getCardValue("10♦")).toBe(10);
});

test("Throws error on invalid card", () => {
  expect(() => getCardValue("Z♣")).toThrow("Invalid card rank");
  expect(() => getCardValue("1♦")).toThrow("Invalid card rank");
});
