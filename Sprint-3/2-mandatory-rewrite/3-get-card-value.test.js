const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    })

// Case 2: Handle Number Cards (2-10)
test("should return numeric value for number cards", () => {
  expect(getCardValue("5♥")).toBe(5);
  expect(getCardValue("9♦")).toBe(9);
  expect(getCardValue("2♣")).toBe(2);
  expect(getCardValue("10♦")).toBe(10);
});

// Case 3: Handle Face Cards (J, Q, K)
test("should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("J♣")).toBe(10);
  expect(getCardValue("Q♥")).toBe(10);
  expect(getCardValue("K♠")).toBe(10);
});

// Case 4: Handle Invalid Cards
test("should throw an error for invalid card ranks", () => {
  expect(() => getCardValue("Z♣")).toThrow("Invalid card rank");
  expect(() => getCardValue("1♦")).toThrow("Invalid card rank");
  expect(() => getCardValue("X♥")).toThrow("Invalid card rank");
  expect(() => getCardValue("")).toThrow("Invalid card rank");
});