const {getCardValue} = require("./get-card-value");

describe("getCardValue", () => {
  test("should return the correct value for a valid card", () => {
    expect(getCardValue("5♠")).toBe(5);
  });

  // Test numeric cards
  test("should return correct values for numeric cards", () => {
    expect(getCardValue("2♥")).toBe(2);
    expect(getCardValue("7♦")).toBe(7);
    expect(getCardValue("10♣")).toBe(10);
  });

  // Test face cards
  test("should return 10 for face cards (J, Q, K)", () => {
    expect(getCardValue("J♠")).toBe(10);
    expect(getCardValue("Q♥")).toBe(10);
    expect(getCardValue("K♦")).toBe(10);
  });

  // Test ace
  test("should return 11 for ace", () => {
    expect(getCardValue("A♣")).toBe(11);
  });

  // Test invalid inputs
  test("should throw error for invalid card format", () => {
    expect(() => getCardValue("")).toThrow();
    expect(() => getCardValue("H♠")).toThrow();
    expect(() => getCardValue("13♥")).toThrow();
  });
});