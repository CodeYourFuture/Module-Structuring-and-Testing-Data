function getCardValue(card) {
    const rankChar = card.slice(0, -1);
   

    if (rankChar === "A") return 11;
    if (["K", "Q", "J", "10"].includes(rankChar)) return 10;// If rank is 'K', 'Q', or 'J' (King, Queen, Jack), return 10 points

    const validRanks = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
    if (validRanks.includes(rankChar)) return Number(rankChar); // Define all valid numeric ranks as strings

    throw new Error("Invalid card rank.");
} 
module.exports = getCardValue;
