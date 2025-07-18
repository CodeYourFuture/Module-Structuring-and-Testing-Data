const getCardValue = require("./3-get-card-value");
// Handle Ace
test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return numeric value for number cards", () => {
  expect(getCardValue("2♦")).toEqual(2);
  expect(getCardValue("10♥")).toEqual(10);
  expect(getCardValue("7♣")).toEqual(7);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Jack, Queen, and King", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

// Case 4: Handle Ace Again(A):
test("should return 11 for Ace of Hearts", () => {
  expect(getCardValue("A♥")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card ranks", () => {
  expect(() => getCardValue("1♠")).toThrow("Invalid card rank.");
  expect(() => getCardValue("Z♣")).toThrow("Invalid card rank.");
  expect(() => getCardValue("11♦")).toThrow("Invalid card rank.");
  expect(() => getCardValue("")).toThrow("Invalid card rank.");
});

// Case 6: Handle malformed numeric inputs that parseInt would misinterpret
test("should throw an error for malformed numeric ranks", () => {
  expect(() => getCardValue("0x02♠")).toThrow("Invalid card rank.");
  expect(() => getCardValue("2.1♠")).toThrow("Invalid card rank.");
  expect(() => getCardValue("0002♠")).toThrow("Invalid card rank.");
  expect(() => getCardValue("2ABC♠")).toThrow("Invalid card rank.");
});

