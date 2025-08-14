const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    expect(getCardValue("A♠")).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("Should return rank number between 2 and 10",()=>{
  expect(getCardValue("5♥")).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test("Should return 10 for Face Cards J, Q, K", () => {
expect(getCardValue("K♠")).toEqual(10);
expect(getCardValue("J♣")).toEqual(10);
expect(getCardValue("Q♦")).toEqual(10);
});

// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
test("should throw an error indicating Invalid card rank.", () => {
  expect(() => getCardValue("")).toThrow("Invalid Card rank.");
});
