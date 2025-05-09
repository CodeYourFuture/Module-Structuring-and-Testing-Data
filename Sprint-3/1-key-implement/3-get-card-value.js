function getCardValue(card) {
    // Extract the rank (everything except the last character, which is the suit)
    const rank = card.slice(0, -1);

    // Handle Ace
    if (rank === "A") return 11;

    // Handle Face Cards (J, Q, K) and "10"
    if (["10", "J", "Q", "K"].includes(rank)) return 10;

    // Handle Number Cards (2-9)
    const numericValue = parseInt(rank);
    if (numericValue >= 2 && numericValue <= 9) return numericValue;

    // Handle Invalid Cards
    throw new Error("Invalid card rank.");
}

// Testing the function using assertions
function assertEquals(actualOutput, targetOutput) {
    console.assert(
        actualOutput === targetOutput,
        `Expected ${actualOutput} to equal ${targetOutput}`
    );
}
// Test cases
assertEquals(getCardValue("A♠"), 11);  // Ace should return 11
assertEquals(getCardValue("10♠"), 10); // 10 should return 10
assertEquals(getCardValue("Q♠"), 10);  // Queen should return 10
assertEquals(getCardValue("5♥"), 5);   // Number card should return its value
assertEquals(getCardValue("J♣"), 10);  // Jack should return 10

