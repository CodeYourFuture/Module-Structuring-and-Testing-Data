const getCardValue = require("./3-get-card-value");

// Case 1: Ace
test("should return 11 for Ace of Spades", () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Number Cards (2–10)
test("should return correct value for number cards (2-10)", () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("5♠")).toEqual(5);
  expect(getCardValue("9♦")).toEqual(9);
  expect(getCardValue("10♥")).toEqual(10);
});

// Case 3: Face Cards (J, Q, K)
test("should return 10 for face cards", () => {
  expect(getCardValue("J♦")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});

// Case 4: Invalid Ranks
test("should throw an error for invalid rank Z", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});

test("should throw an error for malformed number like 0x02", () => {
  expect(() => getCardValue("0x02♠")).toThrow("Invalid card rank");
});

test("should throw an error for decimal number like 2.1", () => {
  expect(() => getCardValue("2.1♠")).toThrow("Invalid card rank");
});

test("should throw an error for malformed format like 00_02", () => {
  expect(() => getCardValue("00_02♠")).toThrow("Invalid card rank");
});
