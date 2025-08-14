const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return correct value for number cards (2-10)", () => {
  const twoOfClubs = getCardValue("2♣");
  expect(twoOfClubs).toEqual(2);

  const fiveOfDiamonds = getCardValue("5♦");
  expect(fiveOfDiamonds).toEqual(5);

  const tenOfHearts = getCardValue("10♥");
  expect(tenOfHearts).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards (J, Q, K)", () => {
  const jackOfSpades = getCardValue("J♠");
  expect(jackOfSpades).toEqual(10);

  const queenOfClubs = getCardValue("Q♣");
  expect(queenOfClubs).toEqual(10);

  const kingOfDiamonds = getCardValue("K♦");
  expect(kingOfDiamonds).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for any Ace card", () => {
  const aceOfClubs = getCardValue("A♣");
  expect(aceOfClubs).toEqual(11);

  const aceOfDiamonds = getCardValue("A♦");
  expect(aceOfDiamonds).toEqual(11);

  const aceOfHearts = getCardValue("A♥");
  expect(aceOfHearts).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return null for invalid cards", () => {
  const invalidCard = getCardValue("1♠");
  expect(invalidCard).toBeNull();

  const emptyCard = getCardValue("");
  expect(emptyCard).toBeNull();
});
