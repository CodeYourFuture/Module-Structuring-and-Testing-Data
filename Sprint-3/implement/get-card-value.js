// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

function getCardValue(cardRank){
    
    cardRank = cardRank.slice(0, 1);
    
    if(cardRank ==="A"){
        return 11;
    }else if(cardRank === "J" || cardRank === "K" || cardRank === "Q" || cardRank === 10){
        return 10;
    }

    const numericalValue = parseInt(cardRank, 10);
    if(numericalValue >= 2 && numericalValue <= 10){
        return numericalValue;
    }else {
        return 'Invalid card rank'
    }
}
module.exports = getCardValue;

const assert = require("assert");

function testGetCardValue(){
    // Number cards test (2-9)
    assert.strictEqual(getCardValue("5"), 5, "Test failed: '5' should return 5");
    assert.strictEqual(getCardValue("9"), 9, "Test failed: '9' should return 9");

    // Face cards test (J,K,Q)
    assert.strictEqual(getCardValue("J"), 10, "Test failed: 'J' should return 10");
    assert.strictEqual(getCardValue("K"), 10, "Test failed: 'K' should return 10");
    assert.strictEqual(getCardValue("Q"), 10, "Test failed: 'Q' should return 10");

    //Ace test (A)
    assert.strictEqual(getCardValue("A"), 11, "Test failed: 'A' should return 11");

    console.log('All tests passed!');
}


//testGetCardValue();
console.log(getCardValue("A@"));

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
