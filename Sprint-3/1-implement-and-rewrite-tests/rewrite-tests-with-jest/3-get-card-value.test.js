// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");
// Case 1: Handle Ace (A):      
test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return correct values for number cards 2-9", () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("3♣")).toEqual(3);
  expect(getCardValue("4♣")).toEqual(4);
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("6♦")).toEqual(6);       
  expect(getCardValue("7♠")).toEqual(7);
  expect(getCardValue("8♠")).toEqual(8);
  expect(getCardValue("9♥")).toEqual(9);
}); 
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards J, Q, K and 10", () => {
  expect(getCardValue("10♦")).toEqual(10);
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});

// Case 4: Handle Invalid Cards:
test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("B♦")).toThrow("Invalid card rank.");
});
