const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return correct value for number cards 2-10", () => {
    for (let i=2; i<= 10;i++){
        const card= `${i}♠`;// we can choose any suit like ♠, ♥, ♦, or ♣
        const fiveofHearts =getCardValue(card);
        expect(fiveofHearts).toEqual(i);
    }
    });

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for Face Cards(J, Q, K)", () => {
    expect(getCardValue("J♠")).toEqual(10);
    expect(getCardValue("Q♠")).toEqual(10);
    expect(getCardValue("K♠")).toEqual(10);
    
    });


// Case 4: Handle Ace (A):
test("should return 11 for handleAce", () => {
    const handleAce = getCardValue("A♠");
    expect(handleAce).toEqual(11);
    });

// Case 5: Handle Invalid Cards:
test("should throw an error for invalid card input", () => {
    expect(() => getCardValue(" ")).toThrow("Invalid card rank.");
    expect(() => getCardValue("X♠")).toThrow("Invalid card rank.");
  });
  
