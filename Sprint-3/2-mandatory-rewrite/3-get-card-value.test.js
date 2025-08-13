const getCardValue = require("./3-get-card-value");

// Case 1: Handle Ace (A)
test("should return 11 for Ace of Spades", () => {
    expect(getCardValue("A♠")).toBe(11);
});

test("should return 11 for Ace of Diamonds", () => {
    expect(getCardValue("A♦")).toBe(11);
});

// Case 2: Handle Number Cards (2-10)
test("should return 5 for 5 of Hearts", () => {
    expect(getCardValue("5♥")).toBe(5);
});

test("should return 10 for 10 of Clubs", () => {
    expect(getCardValue("10♣")).toBe(10);
});

// Case 3: Handle Face Cards (J, Q, K)
test("should return 10 for face cards(J,Q,K)", () => {
    expect(getCardValue("J♦")).toBe(10);
});
// Case 4: Handle Invalid Cards
test("should throw an error for invalid card rank", () => {
    expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
});

test("should throw an error for empty string", () => {
    expect(() => getCardValue("")).toThrow("Invalid card rank");
});

test("should throw an error for missing suit", () => {
    expect(() => getCardValue("10")).toThrow("Invalid card rank");
});
