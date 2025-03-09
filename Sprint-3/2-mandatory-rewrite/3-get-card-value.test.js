const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 2-9 for number cards", () => {
    expect(getCardValue("2♥")).toEqual(2);
    expect(getCardValue("5♦")).toEqual(5);
    expect(getCardValue("9♣")).toEqual(9);
  });
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards", () => {
    expect(getCardValue("J♥")).toEqual(10);
    expect(getCardValue("Q♦")).toEqual(10);
    expect(getCardValue("K♣")).toEqual(10);
  });
// Case 4: Handle Ace (A):
test("should return 11 for Ace", () => {
    expect(getCardValue("A♥")).toEqual(11);
    expect(getCardValue("A♦")).toEqual(11);
    expect(getCardValue("A♣")).toEqual(11);
  });
// Case 5: Handle Invalid Cards:
test("should return 0 for invalid cards", () => {
    expect(getCardValue("X")).toEqual(0);
    expect(getCardValue("")).toEqual(0);
    expect(getCardValue(123)).toEqual(0);
    expect(getCardValue(null)).toEqual(0);
    expect(getCardValue(undefined)).toEqual(0);
  });