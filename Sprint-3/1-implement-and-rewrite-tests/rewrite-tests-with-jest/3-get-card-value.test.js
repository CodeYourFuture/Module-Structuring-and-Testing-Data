// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test ("should return a 5 for the card with rank of 5 like(5♥) ",()=>{
  const fiveofHearts = getCardValue("5♥");
  expect(fiveofHearts).toEqual(5);

})
// Case 3: Handle Face Cards (J, Q, K):
test("shoild return 10 fore the faced cart like king(K♦) and queen (Q♣)")
const kingCard =getCardValue("K♦");
const queenCard= getCardValue("Q♣");
expect(kingCard).toEqual(10);
expect (queenCard).toEqual(10);
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♣");
  expect(aceofSpades).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test ("should return invalid card rank for invalid inputs like(z♣)",()=>{
  const invalidCard= getCardValue("z♣");
  expect(invalidCard).toEqual("Invalid card rank.");
});