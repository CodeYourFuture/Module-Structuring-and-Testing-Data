// This statement loads the getCardValue function you wrote in the implement directory.
const getCardValue = require("../implement/3-get-card-value");

// Case 1: Ace
test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2–10)
test("should return numeric value for number cards 2–10", () => {
  expect(getCardValue("2♥")).toEqual(2);
  expect(getCardValue("7♦")).toEqual(7);
  expect(getCardValue("9♣")).toEqual(9);
  expect(getCardValue("10♠")).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K)
test("should return 10 for face cards J, Q, K", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});

// Case 4: Handle Ace (A)
test("should return 11 for any Ace", () => {
  expect(getCardValue("A♣")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
});

// Case 5: Handle Invalid Cards
test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
  expect(() => getCardValue("1♦")).toThrow("Invalid card rank");
  expect(() => getCardValue("XY")).toThrow("Invalid card rank");
});
