const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  expect(getCardValue("A♠")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):

test("should return correct value for number cards (2-10)", () => {
  for (let i = 2; i <= 10; i++) {
    expect(getCardValue(`${i}♠`)).toEqual(i);
    expect(getCardValue(`${i}♥`)).toEqual(i);
  }
});

// Alternate long method

// test("should return the value of number cards (2-10)", () => {
//   expect(getCardValue("2♠")).toEqual(2);
//   expect(getCardValue("3♠")).toEqual(3);
//   expect(getCardValue("4♠")).toEqual(4);
//   expect(getCardValue("5♠")).toEqual(5);
//   expect(getCardValue("6♠")).toEqual(6);
//   expect(getCardValue("7♠")).toEqual(7);
//   expect(getCardValue("8♠")).toEqual(8);
//   expect(getCardValue("9♠")).toEqual(9);
//   expect(getCardValue("10♠")).toEqual(10);
// });

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 or face cards (J, Q, K)", () => {
  ["J", "Q", "K"].forEach((rank) => {
    expect(getCardValue(`${rank}♣`)).toEqual(10);
    expect(getCardValue(`${rank}♦`)).toEqual(10);
  });
});


// Case 4: Handle Invalid Cards:
test("should throw an error for invalid card", () => {
  expect(() => getCardValue("Invalid")).toThrow("Invalid card rank");
  expect(() => getCardValue("0x02♠")).toThrow("Invalid card rank");
  expect(() => getCardValue("2.1♠")).toThrow("Invalid card rank");
  expect(() => getCardValue("")).toThrow("Invalid card rank");
});
