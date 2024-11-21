function getCardValue(card) {
  // Get the rank by removing the last character (suit)
  const rank = card.slice(0, -1); // Take everything except the last character

  // Handle numeric cards (from "2" to "10")
  if (rank === "10") {
    return 10; // "10" is worth 10
  }
  if (rank >= "2" && rank <= "9") {
    return Number(rank); // Convert string to a number and return for "2" to "9"
  }

  // Handle special cases for face cards and Ace
  if (rank === "A") {
    return 11; // Ace is worth 11
  }
  if (rank === "J" || rank === "Q" || rank === "K") {
    return 10; // Face cards are worth 10
  }

  // If the rank is invalid
  return "Invalid card rank";
}

// Test examples
console.log(getCardValue("7♠"));  // Output: 7
console.log(getCardValue("A♦")); // Output: 11
console.log(getCardValue("K♣")); // Output: 10
console.log(getCardValue("10♥")); // Output: 10
console.log(getCardValue("X♠"));  // Output: "Invalid card rank"

// Tests
test("getCardValue works for valid cards and handles invalid cases", () => {
  // Test numeric cards
  expect(getCardValue("7♠")).toBe(7); // "7♠" should return 7
  expect(getCardValue("9♡")).toBe(9); // "9♡" should return 9
  expect(getCardValue("10♣")).toBe(10); // "10♣" should return 10

  // Test face cards
  expect(getCardValue("J♣")).toBe(10); // "J♣" should return 10
  expect(getCardValue("Q♦")).toBe(10); // "Q♦" should return 10
  expect(getCardValue("K♥")).toBe(10); // "K♥" should return 10

  // Test Ace
  expect(getCardValue("A♦")).toBe(11); // "A♦" should return 11

  // Test invalid cards
  expect(getCardValue("12♦")).toBe("Invalid card rank"); // Invalid rank
  expect(getCardValue("X♠")).toBe("Invalid card rank");  // Invalid rank
});
