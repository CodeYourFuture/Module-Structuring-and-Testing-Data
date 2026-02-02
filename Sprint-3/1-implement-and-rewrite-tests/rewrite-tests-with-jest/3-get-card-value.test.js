// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");



// Case 2: Handle Number Cards (2-10):
test("should return the number on the card ", () => {
  expect(getCardValue("10♠")).toEqual(10);
  expect(getCardValue("8♠")).toEqual(8);
  expect(getCardValue("2♠")).toEqual(2);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for ( J or Q or K)  of spades",()=>{
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♠")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
})
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
  const aceOfSpades = getCardValue("A♠");
  expect(aceOfSpades).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return 'Invalid, card does not have a face' for '5'",()=>{
  expect(()=>{getCardValue("5")}).toThrow("Invalid, card does not have a face");
});

test("should return 'Invalid, card does not have a face' for 'AQ'", () => {
  expect(() => {
    getCardValue("AQ");
  }).toThrow("Invalid, card does not have a face");
});

test("should return 'Invalid card rank' for 1 of spades",()=>{
  expect(() => {
    getCardValue("1♠");
  }).toThrow("Invalid card rank");
});

test("should return 'Invalid card rank' for 15 of spades", () => {
  expect(() => {
    getCardValue("15♠");
  }).toThrow("Invalid card rank");
});
