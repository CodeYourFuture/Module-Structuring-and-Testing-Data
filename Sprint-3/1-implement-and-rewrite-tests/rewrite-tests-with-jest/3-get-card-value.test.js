// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("Should return numeric value(8) for Number Cards (2-10)", () => {
  const aceofSpades = getCardValue("8♠");
  expect(aceofSpades).toEqual(8);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return the value 10,  a card with a rank of ('10', 'J', 'Q', or 'K')", () => {
  const aceofSpades = getCardValue("K");
  expect(aceofSpades).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return the value 11,for a card with a rank of 'A' ", () => {
  const aceofSpades = getCardValue("A");
  expect(aceofSpades).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should throw an error,with an invalid rank 'OL'", () => {
  const aceofSpades = getCardValue("OL");
  expect(aceofSpades).toBe("Invalid card rank");
});
