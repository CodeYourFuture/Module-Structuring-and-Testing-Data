// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return the numeric value for number cards (2-10)", () => {
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);
  const tenofHearts = getCardValue("10♥");
  expect(tenofHearts).toEqual(10);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards (J, Q, K)", () => {
  const kingofHearts = getCardValue("K♥");
  expect(kingofHearts).toEqual(10);
  const queenofHearts = getCardValue("Q♥");
  expect(queenofHearts).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for an Ace", () => {
  const aceofHearts = getCardValue("A♥");
  expect(aceofHearts).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return invalid card rank", () => {
  const twelveofHearts = getCardValue("12♥");
  expect(twelveofHearts).toEqual("Invalid card rank");
});
