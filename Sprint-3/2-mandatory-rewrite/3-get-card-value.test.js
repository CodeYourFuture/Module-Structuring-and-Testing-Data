const getCardValue = require("./3-get-card-value");

test("should return the value of number cards (2-10)", () => {
  for (let i = 2; i <= 10; i++) {
    expect(getCardValue(i + "♠")).toEqual(i);
  }
});

test("should return 10 for face cards (J, Q, K)", () => {
  ["J", "Q", "K"].forEach((rank) => {
    expect(getCardValue(rank + "♠")).toEqual(10);
  });
});
test("should return 11 for Ace of Spades", () => {
  expect(getCardValue("A♠")).toEqual(11);
});

test("should throw error for invalid card", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});
