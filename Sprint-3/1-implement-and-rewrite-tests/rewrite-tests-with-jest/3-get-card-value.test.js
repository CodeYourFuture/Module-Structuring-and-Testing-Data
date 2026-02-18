const getCardValue = require("../implement/3-get-card-value");
const suits = ["♠", "♥", "♦", "♣"];

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  for (const suit of suits) {
    const ace = `A${suit}`;
    expect(getCardValue(ace)).toEqual(11);
  }
});

// Case 2: Face Cards (J, Q, K)
test(`Should return 10 when given a face card`, () => {
  const faceCards = ["J", "Q", "K"];
  for (const faceCard of faceCards) {
    for (const suit of suits) {
      expect(getCardValue(`${faceCard}${suit}`)).toEqual(10);
    }
  }
});

// Case 3: Number Cards (2-10)
test(`Should return the numerical value of number cards`, () => {
  const cardsNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (const rank of cardsNumbers) {
    for (const suit of suits) {
      const cardFace = `${rank}${suit}`;
      expect(getCardValue(cardFace)).toEqual(rank);
    }
  }
});

// Case 4: Invalid Cards
test(`Should throw an error when given an invalid card`, () => {
  const invalidCards = ["invalid", 7, "", "AA♠", "10♠♦"];
  for (const invalidCard of invalidCards) {
    expect(() => {
      getCardValue(invalidCard);
    }).toThrow();
  }
});
