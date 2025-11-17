// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// Case 2: Handle Number Cards (2-10):
test("should return a number matching the rank value for number cards", () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("3◆")).toEqual(3);
  expect(getCardValue("10♥")).toEqual(10);
  expect(getCardValue("9♠")).toEqual(9);
  expect(getCardValue("7♥")).toEqual(7);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face Cards", () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q◆")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace", () => {
  const aceCard = getCardValue("A◆");
  expect(aceCard).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return invalid card rank for cards that are not in the suite", () => {
  expect(getCardValue("100♠")).toEqual("Invalid card rank.");
  expect(getCardValue("3.1416◆")).toEqual("Invalid card rank.");
  expect(getCardValue("10.9♥")).toEqual("Invalid card rank.");
  expect(getCardValue("09♠")).toEqual("Invalid card rank.");
  expect(getCardValue("7+♥")).toEqual("Invalid card rank.");
});
