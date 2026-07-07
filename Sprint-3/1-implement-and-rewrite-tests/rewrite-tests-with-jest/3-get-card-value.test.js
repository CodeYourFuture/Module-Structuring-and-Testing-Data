// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file
const getCardValue = require("../implement/3-get-card-value");

describe("getCardValue", () => {

  // Case 1: Aces
  test("Should return 11 when given an ace card", () => {
    expect(getCardValue("A♠")).toBe(11);
    expect(getCardValue("A♥")).toBe(11);
    expect(getCardValue("A♦")).toBe(11);
    expect(getCardValue("A♣")).toBe(11);
  });

  // Case 2: Number Cards (2-10)
  describe("Number Cards (2-10)", () => {
    test("should return the exact numeric value for standard cards", () => {
      expect(getCardValue("2♥")).toBe(2);
      expect(getCardValue("5♦")).toBe(5);
      expect(getCardValue("9♠")).toBe(9);
    });

    test("should correctly parse the two-digit boundary card 10", () => {
      expect(getCardValue("10♣")).toBe(10);
      expect(getCardValue("10♦")).toBe(10);
    });
  });

  // Case 3: Face Cards (J, Q, K)
  describe("Face Cards (J, Q, K)", () => {
    test("should return 10 for Jacks (J)", () => {
      expect(getCardValue("J♣")).toBe(10);
    });

    test("should return 10 for Queens (Q)", () => {
      expect(getCardValue("Q♦")).toBe(10);
    });

    test("should return 10 for Kings (K)", () => {
      expect(getCardValue("K♠")).toBe(10);
    });
  });

  // Case 4: Invalid Cards (Error Handling)
  describe("Invalid Cards", () => {
    // Note: When testing exceptions in Jest, wrap the execution in an anonymous function.
    test("should throw an error for text strings unrelated to cards", () => {
      expect(() => getCardValue("invalid")).toThrow();
    });

    test("should throw an error if missing the rank or the suit", () => {
      expect(() => getCardValue("A")).toThrow();
      expect(() => getCardValue("♠")).toThrow();
    });

    test("should throw an error for numeric values out of boundaries", () => {
      expect(() => getCardValue("1♠")).toThrow();  // Should be an Ace
      expect(() => getCardValue("11♥")).toThrow(); // Invalid face range
      expect(() => getCardValue("0♦")).toThrow();  // Zero baseline invalid
    });

    test("should throw an error for unsupported suits or symbols", () => {
      expect(() => getCardValue("Q⭐️")).toThrow();
      expect(() => getCardValue("10X")).toThrow();
    });

    test("should throw an error for spacing anomalies", () => {
      expect(() => getCardValue("J ♠")).toThrow();
    });
  });

});
