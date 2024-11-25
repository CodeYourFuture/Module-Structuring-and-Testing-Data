/* write a function called getCardValue(that takes in a string){
    the function then matches that string to a object in the array of cards and returns the numeric value of the match.
    create a array of a deck of cards. cards 2-10 of any suite have the numeric value respective numeric values 2-10. face cards of any suite have the value 10. the Ace card of any suite has the numeric value 11.
    return the the int value of the card that the input string matched to.
    the input must have 1 numeric value of int 2 - 10 or a face card value of K,Q,J,A. the input string must also contain an emoji for the suit, valid emojis are: ♠️,♦️,♣️,♥️
    } */

    module.exports = function getCardValue(card) {
        const cardValues = {
          '2': 2,
          '3': 3,
          '4': 4,
          '5': 5,
          '6': 6,
          '7': 7,
          '8': 8,
          '9': 9,
          '10': 10,
          'J': 10,
          'Q': 10,
          'K': 10,
          'A': 11
        };
      
        // input validation
        if (typeof card !== 'string') {
          throw new Error('Invalid input: card must be a string');
        }
      
        // Extract character until we hit one thats not a number
        const value = card.match(/^([0-9]+|[JQKA])/)?.[0];
        // note the .match method works as expected with the string for the 1st test case. update with more test cases.
        if (!value || !(value in cardValues)) {
          throw new Error('Invalid input: invalid card value');
        }
      
        // If we got here, the value is valid, so return its numeric value
        return cardValues[value];
      }