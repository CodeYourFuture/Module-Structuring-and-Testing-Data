// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

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


function getCardValue(str){
//second criteria
if(str > 2 && str < 9){
    return Number(str)
}//third criteria
if( str==="10" || str==="J" || str==="Q" || str==="K"){
    return Number("10")
}//fourth criteria
if(str = "A"){
    return Number("11")
}
}

//test2
const str2 = "3";
const output2 = getCardValue(str2);
const expectedOutput2 = 3;
console.assert( output2 === expectedOutput2, "expecting number 3") //passed

//test3
const str3 = "10";
const output3 = getCardValue(str3);
const expectedOutput3 = 10;
console.assert( output3===expectedOutput3, "expecting 10") //passed

//test4
const str4 = "A";
const output4 = getCardValue(str4);
const expectedOutput4 = 11
console.assert(output4 === expectedOutput4 , "expecting 11")