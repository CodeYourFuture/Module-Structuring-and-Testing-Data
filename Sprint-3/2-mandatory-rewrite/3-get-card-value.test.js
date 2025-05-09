const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 4 for four of Spades", () => {
  const fourOfSpades = getCardValue("4♠");
  expect(fourOfSpades).toEqual(4);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Queen of Spades", () => {
  const queenOfSpades = getCardValue("Q♠");
  expect(queenOfSpades).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for Ace of Diamonds", () => {
  const aceOfDiamonds = getCardValue("A♦");
  expect(aceOfDiamonds).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return 11 for Ace of Diamonds", () => {
  const princeOfDiamonds = getCardValue("P♦");
  expect(princeOfDiamonds).toEqual("Invalid card rank");
});
