const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return 2 for 2 number cards", () => {
  const twoOfHearts = getCardValue("2");
  expect(twoOfHearts).toEqual(2);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards", () => {
  const JofSpades = getCardValue("J");
  expect(JofSpades).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace cards", () => {
  const AOfDiamond = getCardValue("A");
  expect(AOfDiamond).toEqual(11);
});
// Case 5: Handle Invalid Cards:
test("should return invalid card rank for unknown cards", () => {
  const InvalidCard = getCardValue("22");
  expect(InvalidCard).toEqual("Invalid card rank");
});
