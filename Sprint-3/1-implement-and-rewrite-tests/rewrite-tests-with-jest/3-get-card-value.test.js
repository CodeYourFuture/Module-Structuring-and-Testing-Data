// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

describe("getCardValue", () => {
  describe("Valid Card", () => {
    test("Ace cards return 11", () => {
      expect(getCardValue("A♠")).toEqual(11);
      expect(getCardValue("A♣")).toEqual(11);
    });
    test("Face cards return 10", () => {
      expect(getCardValue("Q♠")).toEqual(10);
      expect(getCardValue("K♣")).toEqual(10);
      expect(getCardValue("J♦")).toEqual(10);
    });
    test("Number cards return their value", () => {
      expect(getCardValue("2♠")).toEqual(2);
      expect(getCardValue("10♣")).toEqual(10);
      expect(getCardValue("0002♣")).toEqual(2);
    });
  });

  describe("Invalid Card", () => {
    test("Throw error for invalid inputs", () => {
      expect(() => getCardValue("AX")).toThrow("Invalid card");
      expect(() => getCardValue("B♣")).toThrow("Invalid card");
      expect(() => getCardValue("1♦")).toThrow("Invalid card");
      expect(() => getCardValue("11♣")).toThrow("Invalid card");
      expect(() => getCardValue("0x02♠")).toThrow("Invalid card");
      expect(() => getCardValue("2.1♠")).toThrow("Invalid card");
    });
  });
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
