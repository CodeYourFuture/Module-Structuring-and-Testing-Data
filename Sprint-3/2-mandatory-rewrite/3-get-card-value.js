function getCardValue(card) {
    // replace with your code from key-implement
   // return 11;
    
    if (card === 'A') {
        return 11; // Ace can be 11 or 1, but we'll
    } 
    else if (card === 'K' || card === 'Q' || card === 'J') {
        return 10; // Face cards are worth 10
    } 
    else {
        return parseInt(card); // Number cards are worth their face value
    }
        
}
console.log(getCardValue('K')); // Should return 11
module.exports = getCardValue