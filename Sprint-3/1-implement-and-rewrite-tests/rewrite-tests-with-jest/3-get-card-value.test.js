const getCardValue = require("../implement/3-get-card-value");

// Ace
test("Should return 11 when given an ace card", () => {
  expect(getCardValue("A♠")).toBe(11);
});

// Number cards
test("Should return the numeric value for number cards", () => {
  expect(getCardValue("2♠")).toBe(2);
  expect(getCardValue("5♥")).toBe(5);
  expect(getCardValue("9♦")).toBe(9);
  expect(getCardValue("10♣")).toBe(10);
});

// Face cards
test("Should return 10 for face cards", () => {
  expect(getCardValue("J♠")).toBe(10);
  expect(getCardValue("Q♥")).toBe(10);
  expect(getCardValue("K♦")).toBe(10);
});

// Invalid cards (basic)
test("Should throw error for invalid cards", () => {
  expect(() => getCardValue("1♠")).toThrow();
  expect(() => getCardValue("B♣")).toThrow();
  expect(() => getCardValue("10?")).toThrow();
  expect(() => getCardValue("invalid")).toThrow();
});

// Invalid numeric formats (IMPORTANT for your strict function)
test("Should throw error for malformed numeric ranks", () => {
  expect(() => getCardValue("0x02♠")).toThrow();
  expect(() => getCardValue("2.1♠")).toThrow();
  expect(() => getCardValue("0002♠")).toThrow();
});

// Invalid structure cases
test("Should throw error for malformed card structure", () => {
  expect(() => getCardValue("")).toThrow();
  expect(() => getCardValue("♠")).toThrow();
  expect(() => getCardValue("10")).toThrow();
  expect(() => getCardValue("A♠♠")).toThrow();
  expect(() => getCardValue(" 2♠")).toThrow();
  expect(() => getCardValue("2♠ ")).toThrow();
});
