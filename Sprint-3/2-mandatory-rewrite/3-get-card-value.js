function getCardValue(card) {
    var rank = card.slice(0, -1); // get the rank of the card by removing the last character. (the suit is the last character)
    if (rank === "A") return 11; // this checks for Aces
    // Handle Number Cards (2-9)
    if (rank === "2") return 2; // this checks for the twos
    if (rank === "3") return 3; // this checks for the threes
    if (rank === "4") return 4; // this checks for the fours
    if (rank === "5") return 5; // this should check for fives
    if (rank === "6") return 6; // this checks for the sixes
    if (rank === "7") return 7; // this checks for the sevens
    if (rank === "8") return 8; // this checks for the eights
    if (rank === "9") return 9; // this checks for the nines
    // Handle Face Cards (J, Q, K) And 10's
    if (rank === "J") return 10; // this checks for Jacks
    if (rank === "Q") return 10; // this checks for Queens
    if (rank === "K") return 10; // this checks for Kings
    if (rank === "10") return 10; // this checks for Tens
    // if none of the above its an invalid card and throw an error
    throw new Error("Invalid card rank."); // this will throw an error if the card is not a valid rank
}

module.exports = getCardValue;