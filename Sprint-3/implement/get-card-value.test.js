const { getCardValue } = require('./get-card-value');

test("Test to see if card value matches the card", function() {
    expect(getCardValue('2♠')).toBe(2);
    expect(getCardValue('9♥')).toBe(9);
    expect(getCardValue('10♦')).toBe(10);;
    expect(getCardValue("J♣")).toBe(10);
    expect(getCardValue("Q♠")).toBe(10);
    expect(getCardValue("K♥")).toBe(10);
    expect(getCardValue("A♦")).toBe(11);
    expect(() => getCardValue("1♠")).toThrow("Invalid card rank");
    expect(() => getCardValue("Z♣")).toThrow("Invalid card rank");
    expect(() => getCardValue("♣")).toThrow("Invalid card format");
});