const getCardValue = require("./3-get-card-value");
let cardList = ["♥", "♣", "♠", "♦"];
let faceCardList = ["J", "Q", "K"];
let invalidCards = ["B♣", "11♠", "0♣", "5", "♠", "_", ""];

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):

for (let item of cardList) {
  for (let i = 2; i <= 10; i++) {
    test(`should return ${i} for ${i}${item}`, () => {
      const fiveofHearts = getCardValue(`${i}${item}`);
      expect(fiveofHearts).toEqual(i);
    });
  }
}

// Case 3: Handle Face Cards (J, Q, K):
for (let face of faceCardList) {
  for (let item of cardList) {
    test(`should return 10 for ${face}${item}`, () => {
      const FaceCard = getCardValue(`${face}${item}`);
      expect(FaceCard).toEqual(10);
    });
  }
}

// Case 4: Handle Ace (A):
for (let item of cardList) {
  test(`should return 11 for Ace of ${item}`, () => {
    const HandleAce = getCardValue(`A${item}`);
    expect(HandleAce).toEqual(11);
  });
}

// Case 5: Handle Invalid Cards:

for (let invCard of invalidCards) {
  test(`should throw error for invalid card ${invCard}`, () => {
    expect(() => getCardValue(invCard)).toThrow("Invalid card rank");
  });
}
