// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return number cards for (2-10)", () => {
  const twoOfSpades = getCardValue("2♠");
  expect(twoOfSpades).toEqual(2);
  const sixOfHearts = getCardValue("6♥");
  expect(sixOfHearts).toEqual(6);
  const tenOfDiamonds = getCardValue("10♦");
  expect(tenOfDiamonds).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards", () => {
  const aceofSpades = getCardValue("Q♠");
  expect(aceofSpades).toEqual(10);
});
// Case 4: Handle Ace (A):
// test("should return 11 for Ace of Spades", () => {
//   const aceofSpades = getCardValue("A♠");
//   expect(aceofSpades).toEqual(11);
// });
// Case 5: Handle Invalid Cards:
test("should throw an error for invalid cards", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid Card");
});
// Sprint-3 rewrite-tests-with-jest/2-get-card-value.test.js. rewrote tests using jest 
// Few modifications done.
// Completed incomplete description and added a test for multiple values such as boundr values 2 and 10 in line 12-17