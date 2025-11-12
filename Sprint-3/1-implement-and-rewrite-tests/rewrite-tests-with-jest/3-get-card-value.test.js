// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for all Aces", () => {
  const suits = ["♠", "♥", "♦", "♣"];
  for (const suit of suits) {
    expect(getCardValue(`A${suit}`)).toEqual(11);
  }
}); // One array handles all suits for Aces

// Case 2: Handle Number Cards (2-10):
test("should return correct value for number cards (2-10)", () => {
  const suits = ["♠", "♥", "♦", "♣"];
  for (let i = 2; i <= 10; i++) {
    for (const suit of suits) {
      expect(getCardValue(`${i}${suit}`)).toEqual(i);
    }
  }
}); // Loop through numbers 2-10 for all suits; 36 test cases

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for all face cards (J, Q, K)", () => {
  const faceCards = ["J", "Q", "K"];
  const suits = ["♠", "♥", "♦", "♣"];
  for (const card of faceCards) {
    for (const suit of suits) {
      expect(getCardValue(`${card}${suit}`)).toEqual(10);
    }
  }
}); // Loop through face cards for all suits; 12 test cases

// Case 4: Handle Invalid Cards:
test("should throw error for all invalid cards", () => {
  const invalidCards = ["1♣", "11♦", "B♠", "Z♥", "15♣", "", " "];
  for (const card of invalidCards) {
    expect(() => getCardValue(card)).toThrow("Invalid card rank");
  }
}); // Loop through all invalid cards; 7 test cases
