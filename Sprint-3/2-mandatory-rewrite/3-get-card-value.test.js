const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
    });

    
// Case 2: Handle Number Cards (2-10)
test("should return the value of number cards (2-10)", () => {
    const testCases = [
        ["2♣", 2],
        ["5♠", 5],
        ["10♦", 10]
    ];
    testCases.forEach(([card, expected]) => {
        expect(getCardValue(card)).toEqual(expected);
    });
});

test("should return 10 for 10 of Diamonds", () => {
    const ten = getCardValue("10♦");
    expect(ten).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K)
test("should return 10 for face cards J, Q, K", () => {
    expect(getCardValue("J♠")).toEqual(10);
    expect(getCardValue("Q♣")).toEqual(10);
    expect(getCardValue("K♥")).toEqual(10);
});

// Case 5: Handle Invalid Cards
test("should throw error for invalid card Z♠", () => {
    expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});

