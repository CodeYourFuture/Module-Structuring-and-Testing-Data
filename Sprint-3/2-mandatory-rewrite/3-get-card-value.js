function getCardValue(card) {
    // replace with your code from key-implement
    return 11;
}
module.exports = getCardValue;

function getCardValue(card) {
    // Convert the card to uppercase to make the function case insensitive
    card = card.toUpperCase();

    // Check for number cards (2 to 10)
    if (!isNaN(card) && card >= 2 && card <= 10) {
        return parseInt(card);
    }

    // Check for face cards
    if (["J", "Q", "K"].includes(card)) {
        return 10;
    }

    // Check for Ace
    if (card === "A") {
        return 11;
    }

    // If input is invalid, throw an error
    throw new Error("Invalid card value");
}

module.exports = getCardValue;
