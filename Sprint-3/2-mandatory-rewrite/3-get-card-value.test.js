const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 6 for number card 6♥", () => {
  const numberCards = getCardValue("6♥");
  expect(numberCards).toEqual(6);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face card K♣", () => {
  const faceCards = getCardValue("K♣");
  expect(faceCards).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♦");
  expect(aceofSpades).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return 'Invalid card rank.' for invalid card T♦", () => {
  const invalidCards = getCardValue("T♦");
  expect(invalidCards).toEqual("Invalid card rank.");
});
