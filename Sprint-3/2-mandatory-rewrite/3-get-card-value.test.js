const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 7 for seven of Spades", () => {
    const aceOfSpades = getCardValue("7♠");
    expect(aceOfSpades).toEqual(7);
    });

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for King of Diamonds", () => {
    const aceOfSpades = getCardValue("K♦");
    expect(aceOfSpades).toEqual(10);
    });

// Case 4: Handle Ace (A):
test("should return 10 for Ten or Clubs",() =>{
    const aceOfSpades = getCardValue("5♠");
    expect(aceOfSpades).toEqual(5);
    });

    // Case 5: Handle Invalid Cards:
test("should throw an error for an invalid card (Z♦)", () => {
    expect(() => getCardValue("Z♦")).toThrow("Invalid card rank.");
});
