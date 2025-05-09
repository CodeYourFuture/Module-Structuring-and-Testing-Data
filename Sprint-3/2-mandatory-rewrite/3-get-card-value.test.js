const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 5 for card Number", () => {
  const actualResult = getCardValue("5♥");
  expect(actualResult).toEqual(5);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face Card", () => {
  const actualResult = getCardValue("K♥");
  expect(actualResult).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace Card", () => {
  const actualResult = getCardValue("A♥");
  expect(actualResult).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return an error for Invalid Card", () => {
  const actualResult = getCardValue("H♥");
  expect(actualResult).toEqual("Invalid card rank.");
});

test("should return an error for Invalid Card", () => {
  const actualResult = getCardValue("17♥");
  expect(actualResult).toEqual("Invalid card rank.");
});
