const getCardValue = require("./get-card-value");

describe("getCardValue tests", () => {
  describe("Acceptance criteria", () => {
    test("Handle Number Cards (2-10)", () => {
      expect(getCardValue("2♠")).toBe(2);
      expect(getCardValue("3♣")).toBe(3);
      expect(getCardValue("4♥")).toBe(4);
      expect(getCardValue("5♦")).toBe(5);
      expect(getCardValue("6♠")).toBe(6);
      expect(getCardValue("7♣")).toBe(7);
      expect(getCardValue("8♥")).toBe(8);
      expect(getCardValue("9♦")).toBe(9);
      expect(getCardValue("10♠")).toBe(10);
    });

    test("Handle Face Cards (J, Q, K)", () => {
      expect(getCardValue("K♣")).toBe(10);
      expect(getCardValue("Q♥")).toBe(10);
      expect(getCardValue("J♦")).toBe(10);
    });

    test("Handle Ace (A)", () => {
      expect(getCardValue("A♠")).toBe(11);
      expect(getCardValue("A♣")).toBe(11);
      expect(getCardValue("A♥")).toBe(11);
      expect(getCardValue("A♦")).toBe(11);
    });

    test("Handle Invalid Cards", () => {
      expect(getCardValue("w♣")).toBe("Invalid card rank.");
      expect(getCardValue("W♦")).toBe("Invalid card rank.");
      expect(getCardValue("0♠")).toBe("Invalid card rank.");
      expect(getCardValue("14♥")).toBe("Invalid card rank.");
      expect(getCardValue("?♣")).toBe("Invalid card rank.");
      expect(getCardValue("♣")).toBe("Invalid card rank.");
      expect(getCardValue(" ♦")).toBe("Invalid card rank.");
      expect(getCardValue("card♣")).toBe("Invalid card rank.");
    });
  });

  describe("Other tests", () => {
    test("Handle lowercase", () => {
      expect(getCardValue("a♠")).toBe(11);
      expect(getCardValue("k♣")).toBe(10);
      expect(getCardValue("q♥")).toBe(10);
      expect(getCardValue("j♦")).toBe(10);
    });

    test("Handle expression as argument", () => {
      expect(getCardValue("2♣ two of clubs".split(" ")[0])).toBe(2);
    });
  });

  describe("Random data", () => {
    test.each([
      ["6♣", 6],
      ["q♦", 10],
      ["10♠", 10],
      ["4♣", 4],
    ])("Valid values: The %s should be %i ", (input, expected) => {
      expect(getCardValue(input)).toBe(expected);
    });

    test.each([
      ["/3/4♣", "Invalid card rank."],
      ["@@$$♦", "Invalid card rank."],
      ["00000♠", "Invalid card rank."],
      ["", "Invalid card rank."],
      ["[]{}♣", "Invalid card rank."],
      ["let♦", "Invalid card rank."],
      ["const♠", "Invalid card rank."],
      ["...♣", "Invalid card rank."],
    ])("Inalid values: The %s should be %s", (input, expected) => {
      expect(getCardValue(input)).toBe(expected);
    });
  });
});
