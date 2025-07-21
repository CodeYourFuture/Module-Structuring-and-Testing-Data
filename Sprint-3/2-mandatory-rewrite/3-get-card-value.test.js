const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

test("should return correct values for number cards", () => {
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("10♦")).toEqual(10);
});

test("should return for face cards J, Q, K", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});

test("throws an error or invalid card", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card");
});

// try {
// getCardValue("Z♠");
//} catch (error) {
// console.log("Caught error:", error.message);
//}

// Case 2: Handle Number Cards (2-10):
// Case 3: Handle Face Cards (J, Q, K):
// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
