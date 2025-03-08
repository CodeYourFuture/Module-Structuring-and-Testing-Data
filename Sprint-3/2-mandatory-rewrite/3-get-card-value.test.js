const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    
    expect(getCardValue("A♠")).toBe(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 5 for Five of Hearts", () => {
    expect(getCardValue("5♥")).toBe(5);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for King of Dimonds", () => {
    expect(getCardValue("K♦")). toBe(10);
})

// Case 4: Handle Ace (10):
test("should return 10 for Ten or Clubs",() =>{
expect(getCardValue("10♣")).toBe(10);
});
// Case 5: Handle Invalid Cards:
test("should throw an error for an invalid card (Z♦)", () => {
    expect(() => getCardValue("Z♦")).toThrow("Invalid card rank");
});
