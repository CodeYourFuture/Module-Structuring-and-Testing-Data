// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A) - works
// test(`Should return 11 when given an ace card`, () => {
//   expect(getCardValue("A♠")).toEqual(11);
// });

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10) - works
// test(`Should return a number given (2-10) card`, () => {
//   expect(getCardValue("2♠")).toEqual(2);
//   expect(getCardValue("3♥")).toEqual(3);
//   expect(getCardValue("4♦")).toEqual(4);
//   expect(getCardValue("5♣")).toEqual(5);
//   expect(getCardValue("6♠")).toEqual(6);
//   expect(getCardValue("7♥")).toEqual(7);
//   expect(getCardValue("8♦")).toEqual(8);
//   expect(getCardValue("9♣")).toEqual(9);
//   expect(getCardValue("10♠")).toEqual(10);
// });

//   Face Cards (J, Q, K) - works
// test(`Should return 10 when given a Queen, King and Jack cards`, () => {
//   expect(getCardValue("Q♥")).toEqual(10);
//   expect(getCardValue("K♦")).toEqual(10);
//   expect(getCardValue("J♣")).toEqual(10);
// });

//   Invalid Cards - works
// test('Should throw "Invalid card" for "invalid"', () => {
//   expect(() => getCardValue("invalid")).toThrow("Invalid card");
//   expect(() => getCardValue("789")).toThrow("Invalid card");
//   expect(() => getCardValue("")).toThrow("Invalid card");
//   expect(() => getCardValue("♠♥♦♣")).toThrow("Invalid card");
//   expect(() => getCardValue("5$")).toThrow("Invalid card");
//   expect(() => getCardValue("£50")).toThrow("Invalid card");
// });

// **Invalid Cards - this only checks the array of invalid input. I have to think about how to
// use the loop here in the reverse order, what is valid or else return invalid!**
// test('should throw "Invalid card" for invalid inputs', () => {
//   const invalidCards = ["invalid", "789", "", "♠♥♦♣", "5$", "£50"];

//   for (const card of invalidCards) {
//     expect(() => getCardValue(card)).toThrow("Invalid card");
//   }
// });

// Case 1: Ace (A)
test("should return a value of 11 when given Ace cards", () => {
  const validSuits = ["♠", "♥", "♦", "♣"];

  for (let i = 0; i < validSuits.length; i++) {
    const card = "A" + validSuits[i];
    expect(getCardValue(card)).toEqual(11);
  }
});

// Suggestion: Group the remaining test data into these categories:
// Case 2: Number Cards (2-10)
test("should return the value of number cards (2-10)", () => {
  const validSuits = ["♠", "♥", "♦", "♣"];
  for (let rank = 2; rank <= 10; rank++) {
    for (let suit of validSuits) {
      const card = `${rank}${suit}`;
      expect(getCardValue(card)).toEqual(rank);
    }
  }
});

// Case 3: Face Cards (J, Q, K)
test("should return a value of 10 for cards (J, Q, K)", () => {
  const validRanks = ["J", "Q", "K"];
  const validSuits = ["♠", "♥", "♦", "♣"];

  for (let rank of validRanks) {
    for (let suit of validSuits) {
      const card = `${rank}${suit}`;
      expect(getCardValue(card)).toEqual(10);
    }
  }
});

// Case 4: Invalid Cards
test('Should throw "Invalid card" for "invalid"', () => {
  expect(() => getCardValue("invalid")).toThrow("Invalid card");
  expect(() => getCardValue("789")).toThrow("Invalid card");
  expect(() => getCardValue("")).toThrow("Invalid card");
  expect(() => getCardValue("♠♥♦♣")).toThrow("Invalid card");
  expect(() => getCardValue("5$")).toThrow("Invalid card");
  expect(() => getCardValue("£50")).toThrow("Invalid card");
});

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
