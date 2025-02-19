const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 5 for Five of Hearts", () => {
    const fiveofHearts = getCardValue("5♥");
    expect(fiveofHearts).toEqual(5);
    });

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face Cards", () => {
    const faceCards = getCardValue("10♦");
    expect(faceCards).toEqual(10);
    });


// Case 4: Handle Ace (A):
test("should return 10 for handleAce", () => {
    const handleAce = getCardValue("A♠");
    expect(handleAce).toEqual(11);
    });

// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card input", () => {
    expect(() => getCardValue(" ")).toThrow("Invalid card rank.");
    expect(() => getCardValue("X♠")).toThrow("Invalid card rank.");
  });
  
