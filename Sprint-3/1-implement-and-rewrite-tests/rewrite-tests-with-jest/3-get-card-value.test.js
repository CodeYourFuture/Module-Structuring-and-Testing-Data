// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):

test("should return number cards", () => {
const fiveofHearts = getCardValue("5♥");
expect(fiveofHearts).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test ("should return Face Cards J, Q, K ", () =>{
  const jackOfClubs = getCardValue("J♣"); 
  expect(jackOfClubs).toEqual(10);
});

// Case 4: Handle Ace (A):
test ("should return Ace", () =>{
const aceofHearts = getCardValue("A♥");
 expect(aceofHearts).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should throw 'Invalid card rank' for a rank of '1'", () => {
  expect(() => getCardValue("1♦")).toThrow("Invalid card rank.");
});