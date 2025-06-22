const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 5 for 5 of Hearts", () => {
  const fiveOfHearts = getCardValue("5♥");
  expect(fiveOfHearts).toEqual(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for jack of clubs", () => {
    const  jackOfClubs = getCardValue("J♣");
    expect(jackOfClubs).toEqual(10);
});

// Case 4: Handle Ace (A):
test("should return 11 for ace of spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should throw error for invalid card rank", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});
