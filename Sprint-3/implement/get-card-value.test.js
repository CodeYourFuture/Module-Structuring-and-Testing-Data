// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
function getCardValue(card) {
  // You need to write assertions for your function to check it works in different cases

  // Acceptance criteria:

  // Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
  const rank = card.slice(0, -1);
  // When the function getCardValue is called with this card string as input,
  // Then it should return the numerical card value

  // Handle Number Cards (2-10):
  // Given a card with a rank between "2" and "9",
  // When the function is called with such a card,
  // Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
  if (rank >= "2" && rank <= "9") {
    return parseInt(rank);
    // Handle Face Cards (J, Q, K):
    // Given a card with a rank of "10," "J," "Q," or "K",
    // When the function is called with such a card,
    // Then it should return the value 10, as these cards are worth 10 points each in blackjack.
  } else if (rank === "10" || rank === "J" || rank === "Q" || rank === "K") {
    return 10;
    // Handle Ace (A):
    // Given a card with a rank of "A",
    // When the function is called with an Ace,
    // Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.
  } else if (rank === "A") {
    return 11;
    // Handle Invalid Cards:
    // Given a card with an invalid rank (neither a number nor a recognized face card),
    // When the function is called with such a card,
    // Then it should throw an error indicating "Invalid card rank."
    // Extract everything except the last character (the suit)
  } else {
    throw new Error("Invalid card rank");
  }
}

describe("getCardValue", () => {
  test("should return the numeric value for cards 2-9", () => {
    expect(getCardValue("2♠")).toBe(2);
    expect(getCardValue("5♥")).toBe(5);
    expect(getCardValue("9♦")).toBe(9);
  });

  test("should return 10 for face cards (10, J, Q, K)", () => {
    expect(getCardValue("10♣")).toBe(10);
    expect(getCardValue("J♠")).toBe(10);
    expect(getCardValue("Q♥")).toBe(10);
    expect(getCardValue("K♦")).toBe(10);
  });

  test("should return 11 for an Ace (A)", () => {
    expect(getCardValue("A♠")).toBe(11);
    expect(getCardValue("A♥")).toBe(11);
  });

  test("should throw an error for invalid card ranks", () => {
    expect(() => getCardValue("1♠")).toThrow("Invalid card rank");
    expect(() => getCardValue("Z♠")).toThrow("Invalid card rank");
    expect(() => getCardValue("♠")).toThrow("Invalid card rank");
    expect(() => getCardValue("AA♠")).toThrow("Invalid card rank");
  });

  test("should throw an error if no suit is provided", () => {
    expect(() => getCardValue("10")).toThrow("Invalid card rank");
    expect(() => getCardValue("J")).toThrow("Invalid card rank");
  });

  test("should throw an error for empty input", () => {
    expect(() => getCardValue("")).toThrow("Invalid card rank");
  });
});
