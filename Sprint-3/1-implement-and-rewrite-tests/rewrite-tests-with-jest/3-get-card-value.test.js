const getCardValue = require("../implement/3-get-card-value");
const suits = ["♠", "♥", "♦", "♣"];

// Case 1: Ace (A)
for (const suit of suits) {
  const ace = `A${suit}`;
  test(`Should return 11 when given an ace card ${ace}`, () => {
    expect(getCardValue(ace)).toEqual(11);
  });
}

// Case 2: Face Cards (J, Q, K)
const faceCards = ["J", "Q", "K"];
for (const rank of faceCards) {
  for (const suit of suits) {
    const cardFace = `${rank}${suit}`;
    test(`Should return 10 when given a face card ${cardFace}`, () => {
      expect(getCardValue(cardFace)).toEqual(10);
    });
  }
}

// Case 3: Number Cards (2-10)
const cardsNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const rank of cardsNumbers) {
  for (const suit of suits) {
    const cardFace = `${rank}${suit}`;
    test(`Should return ${rank} when given a card ${cardFace}`, () => {
      expect(getCardValue(cardFace)).toEqual(rank);
    });
  }
}

// Case 4: Invalid Cards
const invalidCards = ["invalid", 7, "", "AA♠", "10♠♦"];
for (const invalidCard of invalidCards) {
  test(`Should throw an error when given an invalid card ${invalidCard}`, () => {
    expect(() => {
      getCardValue(`${invalidCard}`);
    }).toThrow();
  });
}
