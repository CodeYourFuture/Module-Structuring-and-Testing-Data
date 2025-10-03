// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return correct value for number cards (2-10)", () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("5♦")).toEqual(5);
  expect(getCardValue("10♥")).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace (A)", () => {
  expect(getCardValue("A♣")).toEqual(11);
  expect(getCardValue("A♦")).toEqual(11);
  expect(getCardValue("A♥")).toEqual(11);
}); 
// Case 5: Handle Invalid Cards:

test("should throw an error for invalid input '1♣'", () => {
  expect(() => getCardValue("1♣")).toThrow('Invalid card rank: "1"');
});

test("should throw an error for invalid input '1♦'", () => {
  expect(() => getCardValue("1♦")).toThrow('Invalid card rank: "1"');
});

test("should throw an error for invalid input 'B♥'", () => {
  expect(() => getCardValue("B♥")).toThrow('Invalid card rank: "B"');
});

test("should throw an error for invalid input 'Z♠'", () => {
  expect(() => getCardValue("Z♠")).toThrow('Invalid card rank: "Z"');
});

test("should throw an error for empty string", () => {
  expect(() => getCardValue("")).toThrow('Invalid card rank: ""');
});


// We can run this test file using the command `npx jest 3-get-card-value.test.js`
// in the terminal. Making sure we are in the directory where this file is located.
// If we have Jest installed globally, you can simply run `3-get-card-value.test.js`
// instead. If you have added a test script to your package.json file, you can also run
// `npm test 3-get-card-value.test.js` to execute the tests.