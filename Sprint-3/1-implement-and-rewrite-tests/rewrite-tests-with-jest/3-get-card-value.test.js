// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
// const { test } = require("picomatch");
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
// test("should return numeric value for number cards (2-10)", () => {
//   const fiveofHearts = getCardValue("5♥");
//   expect(fiveofHearts).toEqual(5);
// });
// test("should return numeric value for number cards (2-10)", () => {
//   const twoofHearts = getCardValue("2♥");
//   expect(twoofHearts).toEqual(2);
// });
// test("should return numeric value for number cards (2-10)", () => {
//   const tenofHearts = getCardValue("10♥");
//   expect(tenofHearts).toEqual(10);
// });

test("should return numeric value for all number cards (2–10)", () => {
  const suits = ["♠", "♥", "♦", "♣"];

  for (let n = 2; n <= 10; n++) {
    suits.forEach((suit) => {
      const card = `${n}${suit}`;
      expect(getCardValue(card)).toEqual(n);
    });
  }
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards (J, Q, K) and 10", () => {
  expect(getCardValue("10♦")).toEqual(10);
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});

// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card rank", () => {
  expect(() => {
    getCardValue("1♠");
  }).toThrow("Invalid card rank.");
  expect(() => {
    getCardValue("B♥");
  }).toThrow("Invalid card rank.");
});
