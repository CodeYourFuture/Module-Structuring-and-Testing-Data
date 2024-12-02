const getCardValue = require("./get-card-value");
test("should return the correct value for number cards (2-10)", () => {
  expect(getCardValue("2♠")).toBe(2);
  expect(getCardValue("9♥")).toBe(9);
  expect(getCardValue("10♦")).toBe(10);
});

test("should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("J♠")).toBe(10);
  expect(getCardValue("Q♣")).toBe(10);
  expect(getCardValue("K♦")).toBe(10);
});

test("should return 11 for an Ace (A)", () => {
  expect(getCardValue("A♠")).toBe(11);
});

test("should throw an error for an invalid card rank", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});
