const getCardValue = require("../implement/3-get-card-value");

describe("getCardValue", () => {
  // Ace
  test("returns 11 for Ace", () => {
    expect(getCardValue("A♠")).toBe(11);
  });

  // Face cards
  test("returns 10 for face cards", () => {
    expect(getCardValue("J♥")).toBe(10);
    expect(getCardValue("Q♦")).toBe(10);
    expect(getCardValue("K♣")).toBe(10);
  });

  // Number cards
  test("returns correct value for number cards", () => {
    expect(getCardValue("2♠")).toBe(2);
    expect(getCardValue("10♥")).toBe(10);
  });

  // Invalid format
  test("throws error for invalid strings", () => {
    expect(() => getCardValue("invalid")).toThrow();
    expect(() => getCardValue("A")).toThrow();
  });

  // Invalid numbers (REVIEWER CHECK 🔥)
  test("throws error for invalid numeric formats", () => {
    expect(() => getCardValue("0x02♠")).toThrow();
    expect(() => getCardValue("2.1♠")).toThrow();
    expect(() => getCardValue("0002♠")).toThrow();
  });

  // Invalid rank
  test("throws error for invalid rank", () => {
    expect(() => getCardValue("11♠")).toThrow();
  });

  // Invalid suit
  test("throws error for invalid suit", () => {
    expect(() => getCardValue("A?")).toThrow();
  });
});