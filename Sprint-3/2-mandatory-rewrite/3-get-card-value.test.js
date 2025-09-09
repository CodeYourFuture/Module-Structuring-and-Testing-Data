const getCardValue = require("./3-get-card-value");

// Case 1: Ace
test("should return 11 for Ace", () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
});

// Case 2: Number cards (2–10)
test("should return the value of number cards (2–10)", () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("5♠")).toEqual(5);
  expect(getCardValue("10♥")).toEqual(10);

  // You can even loop for efficiency:
  for (let i = 2; i <= 10; i++) {
    expect(getCardValue(`${i}♦`)).toEqual(i);
  }
});

// Case 3: Face cards (J, Q, K)
test("should return 10 for face cards (J, Q, K)", () => {
  ["J", "Q", "K"].forEach(rank => {
    expect(getCardValue(`${rank}♠`)).toEqual(10);
    expect(getCardValue(`${rank}♥`)).toEqual(10);
  });
});

// Case 4: Invalid cards
test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("Z♣")).toThrow("Invalid card rank");
  expect(() => getCardValue("0x02♠")).toThrow("Invalid card rank");
  expect(() => getCardValue("2.1♠")).toThrow("Invalid card rank");
  expect(() => getCardValue("0002♠")).toThrow("Invalid card rank");
});

