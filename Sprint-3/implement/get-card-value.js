function getCardValue(card) {
    const rank = card.slice(0, -1); 

    switch (rank) {
        case "A":
            return 11; 
        case "K":
        case "Q":
        case "J":
        case "10":
            return 10; 
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            return parseInt(rank);
        default:
            throw new Error("Invalid card rank");
    }
}

// Test cases for different scenarios
try {
    console.assert(getCardValue("A♠") === 11, "Ace should be worth 11 points");
    console.assert(getCardValue("K♣") === 10, "King should be worth 10 points");
    console.assert(getCardValue("Q♦") === 10, "Queen should be worth 10 points");
    console.assert(getCardValue("J♥") === 10, "Jack should be worth 10 points");
    console.assert(getCardValue("10♠") === 10, "10 should be worth 10 points");
    console.assert(getCardValue("9♣") === 9, "9 should be worth 9 points");
    console.assert(getCardValue("5♦") === 5, "5 should be worth 5 points");

    // Testing invalid card rank
    try {
        getCardValue("1♠");
        console.assert(false, "Expected Error for invalid rank '1'");
    } catch (e) {
        console.assert(e.message === "Invalid card rank", "Exception message should be 'Invalid card rank'");
    }

    try {
        getCardValue("Z♦");
        console.assert(false, "Expected Error for invalid rank 'Z'");
    } catch (e) {
        console.assert(e.message === "Invalid card rank", "Exception message should be 'Invalid card rank'");
    }

    console.log("All tests passed!");
} catch (e) {
    console.error("Test failed:", e.message);
}

