const getCardValue = require('./getCardValue');
test('should return the numeric value for cards 2 to 9', function() {
    for (let card = 2; card <= 9; card++) {
        expect(getCardValue(card)).toBe(card);
    }
});

test('should return 10 for face cards "10", "J", "Q", "K"', function() {
    expect(getCardValue("10")).toBe(10);
    expect(getCardValue("J")).toBe(10);
    expect(getCardValue("Q")).toBe(10);
    expect(getCardValue("K")).toBe(10);
});

test('should return 11 for the Ace card "A"', function() {
    expect(getCardValue("A")).toBe(11);
});

test('should throw an error for invalid card types (e.g., "Z")', function() {
    expect(() => getCardValue("Z")).toThrow("Invalid card");
});

test('should throw an error for invalid numeric cards (e.g., 1, 0, -3)', function() {
    expect(() => getCardValue(1)).toThrow("Invalid card");
    expect(() => getCardValue(0)).toThrow("Invalid card");
    expect(() => getCardValue(-3)).toThrow("Invalid card");
});

test('should throw an error for non-numeric and non-string inputs', function() {
    expect(() => getCardValue(null)).toThrow("Invalid card");
    expect(() => getCardValue(undefined)).toThrow("Invalid card");
    expect(() => getCardValue([])).toThrow("Invalid card");
    expect(() => getCardValue({})).toThrow("Invalid card");
});