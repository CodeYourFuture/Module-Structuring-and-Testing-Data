// Import the function
const getCardValue = require("./get-card-value"); // Update the path as needed

// Test Suite
describe("getCardValue", () => {
  it('should return 11 for an Ace ("A")', () => {
    expect(getCardValue("A♠")).toBe(11);
  });

  it('should return 10 for a King ("K")', () => {
    expect(getCardValue("K♠")).toBe(10);
  });

  it('should return 10 for a Queen ("Q")', () => {
    expect(getCardValue("Q♣")).toBe(10);
  });

  it('should return 10 for a Jack ("J")', () => {
    expect(getCardValue("J♦")).toBe(10);
  });

  it('should return the numeric value for numbered cards (e.g., "7")', () => {
    expect(getCardValue("7♥")).toBe(7);
  });

  it('should return "Invalid card rank" for non-standard cards (e.g., "Z")', () => {
    expect(getCardValue("Z♠")).toBe("Invalid card rank");
  });

  it('should return "Invalid card rank" for an invalid numeric card (e.g., "1")', () => {
    expect(getCardValue("1♠")).toBe("Invalid card rank");
  });
});
