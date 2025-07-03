const getCardValue = require("./3-get-card-value");

const aceofSpades = getCardValue("A♠");
expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return the number value of Number cards", () => {
    const numberCards = getCardValue("3♦");
    expect(numberCards).toEqual(3);
  });
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face cards", () => {
    const faceCards = getCardValue("Q♣");
    expect(faceCards).toEqual(10);
  });

// Case 4: Handle Ace (A):
test("should return 11 for Ace cards", () => {
    const aceCards = getCardValue("A♣");
    expect(aceCards).toEqual(11);
  });
// Case 5: Handle Invalid Cards:
test("should return Invalid card rank for Invalid cards", () => {
    expect(() => {
      getCardValue("Z♥");
    }).toThrow("Invalid card rank");
  });