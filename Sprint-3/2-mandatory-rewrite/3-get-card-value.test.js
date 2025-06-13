const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return correlating number for cards with ranks between 2-10", () => {
  const numberCard = getCardValue("5♥");
  expect(numberCard).toEqual(5);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards of J, Q, K", () => {
  const faceCard = getCardValue("J♣");
  expect(faceCard).toEqual(10);
});
// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
  const aceCard = getCardValue("A♦");
  expect(aceCard).toEqual(11);
});
// Case 5: Handle Invalid Cards - using an array for the inputs :
test("should throw an error for invalid card ranks", () => {
  const invalidCardInput = [
    "G♥", // random rank letter
    "1♠", // 1 is not a valid card
    "11♦", // 11 is not a valid card
    "62♣", //random rank number
    "", //empty string
    "NaN♠", //NaN as rank
    "undefined♣", //undefined as rank
    "null♦", // null as rank
  ];

  for (const input of invalidCardInput) {
    expect(() => getCardValue(input)).toThrow("Invalid card rank");
    /*
Jest doesn;t test the value itself, it tests whether the function is throwing an error. If getCardValue(input) is called directly (i.e. using: expect(getCardValue(input)).toThrow("Invalid card rank") instead), the error happens immediately and Jest never gets a chance to check it, therefore the test fails. Wrapping getCardValue(input) in an anonymous function ensures that it delays the function execution allowing Jest to observe the error instead of triggering it too soon.
*/
  }
});
