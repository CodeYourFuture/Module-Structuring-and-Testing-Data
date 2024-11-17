function getCardValue(card) {
    // Extract the rank and suit from the card string
    const rank = card.slice(0, -1); // All except the last character
    const suit = card.slice(-1);   // The last character (the suit emoji)

    // Validate the suit
    if (!["♠", "♥", "♦", "♣"].includes(suit)) {
        throw new Error("Invalid card suit.");
    }

    // Determine the card value based on rank
    if (rank >= "2" && rank <= "10") {
        return parseInt(rank); // Numeric cards return their number value
    } else if (["J", "Q", "K"].includes(rank)) {
        return 10; // Face cards (J, Q, K) return 10
    } else if (rank === "A") {
        return 11; // Aces (A) default to 11
    } else {
        throw new Error("Invalid card rank."); // Handle invalid ranks
    }
}

// Assertions for testing
const assert = require('assert');

// Test cases for valid cards
assert.strictEqual(getCardValue("2♠"), 2);   // Number card
assert.strictEqual(getCardValue("10♥"), 10); // Number card
assert.strictEqual(getCardValue("J♦"), 10);  // Face card
assert.strictEqual(getCardValue("Q♣"), 10);  // Face card
assert.strictEqual(getCardValue("K♠"), 10);  // Face card
assert.strictEqual(getCardValue("A♥"), 11);  // Ace

// Test cases for invalid rank
assert.throws(() => getCardValue("1♠"), /Invalid card rank/); // Invalid rank
assert.throws(() => getCardValue("Z♣"), /Invalid card rank/); // Invalid rank

// Test cases for invalid suit
assert.throws(() => getCardValue("10X"), /Invalid card suit/); // Invalid suit
assert.throws(() => getCardValue("A#"), /Invalid card suit/);  // Invalid suit

// Test edge cases
assert.throws(() => getCardValue(""), /Invalid card rank/);    // Empty string
assert.throws(() => getCardValue(" "), /Invalid card rank/);   // Whitespace only

// If all tests pass
console.log("All tests passed!");

