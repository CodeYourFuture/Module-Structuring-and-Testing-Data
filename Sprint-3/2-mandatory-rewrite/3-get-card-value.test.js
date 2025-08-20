const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceofSpades = getCardValue("A♠");
    expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return correct number for number cards", () => {
    expect(getCardValue("5♥")).toEqual(5);
    expect(getCardValue("10♦")).toEqual(10);
});

// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards J, Q, K", () => {
    expect(getCardValue("J♣")).toEqual(10);
    expect(getCardValue("Q♦")).toEqual(10);
    expect(getCardValue("K♥")).toEqual(10);
});

// Case 4: Handle Ace (A):
// (Already tested above with Ace of Spades)

// Case 5: Handle Invalid Cards:
test("should throw error for invalid cards", () => {
    expect(() => getCardValue("Z♠")).toThrow("Invalid card rank.");
    expect(() => getCardValue("1♠")).toThrow("Invalid card rank.");
});

test("should throw error for multi-digit number (other than 10)", () => {
    expect(() => getCardValue("345♠")).toThrow("Invalid card rank.");
});

test("should throw error for only suit (no rank)", () => {
    expect(() => getCardValue("♠")).toThrow("Invalid card rank.");
});

test("should throw error for numbers out of range", () => {
    expect(() => getCardValue("100♠")).toThrow("Invalid card rank.");
});
