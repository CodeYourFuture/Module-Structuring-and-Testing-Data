// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return correct value for number cards", () => {
  const fiveheart = getCardValue("5♥");
  expect(fiveheart).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test("Case 3: Handle Face Cards (J, Q, K)", () => {
  const cardOfJ = getCardValue("J♥");
  expect(cardOfJ).toEqual(10);
});

// Case 4: Handle Ace (A):
test("Case 4: Handle Face Cards (J, Q, K)", () => {
  const aceOfHeart = getCardValue("A♥");
  expect(aceOfHeart).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("Case 5: Handle Invalid Cards", () => {
  expect(() => {
    getCardValue("21♠");
  }).toThrow("Invalid card rank");
});