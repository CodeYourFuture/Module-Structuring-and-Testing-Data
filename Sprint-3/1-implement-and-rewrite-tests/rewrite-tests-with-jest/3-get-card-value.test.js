
// Case 1: Ace (A)
test("should return 11 when given an ace card", () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Case 2: Number cards (2-10)
test("should return the numeric value for number cards", () => {
  expect(getCardValue("2♥")).toEqual(2);
  expect(getCardValue("5♣")).toEqual(5);
  expect(getCardValue("9♦")).toEqual(9);
  expect(getCardValue("10♠")).toEqual(10);
});

// Case 3: Face cards (J, Q, K)
test("should return 10 for face cards", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

// Case 4: Invalid cards
test("should throw an error for invalid cards", () => {
  expect(() => getCardValue("invalid")).toThrow();
  expect(() => getCardValue("1♠")).toThrow();
  expect(() => getCardValue("11♠")).toThrow();
  expect(() => getCardValue("A")).toThrow();
  expect(() => getCardValue("♠")).toThrow();
  expect(() => getCardValue("KH")).toThrow();
  expect(() => getCardValue("")).toThrow();
});

