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

function getCardValue(card) {
  // Here I am getting the value input and slicing it to get only the numerical value
  let value = card.slice(0, -1);

  // Here I am declaring the cardNumber, faceCard and ace the ace values as per given instructions
  let cardNumber = ["2", "3", "4", "5", "6", "7", "8", "9"];
  let faceCard = ["10", "J", "K", "Q"];
  let ace = "A";

  // this below code will change the string value to int using the parseInt function
  if (cardNumber.includes(value)) {
    return parseInt(value);
  }

  if (faceCard.includes(value)) {
    return 10;
  }

  if (value === ace) {
    return 11;
  }

  // Here I am catching the error if user input is not part of the defined values
  if (!!cardNumber || !!faceCard || !!ace) {
    return "Error: Invalid card value";
  }
}
console.log(getCardValue("16♠"));

// the following are assertion test cases to check if the function is working correctly with different values
// Valid cases
console.assert(getCardValue("7♠") === 7, "Test Failed: 7♠ should return 7");
console.assert(getCardValue("10♣") === 10, "Test Failed: 10♣ should return 10");
console.assert(getCardValue("Q♦") === 10, "Test Failed: Q♦ should return 10");
console.assert(getCardValue("A♥") === 11, "Test Failed: A♥ should return 11");

// Edge cases
console.assert(getCardValue("2♠") === 2, "Test Failed: 2♠ should return 2");
console.assert(getCardValue("K♦") === 10, "Test Failed: K♦ should return 10");

// Invalid cases
console.assert(getCardValue("Q♦") === 11, "Test Failed: Q♦ should return 10"); // deliberately made it wrong to check if the functions is working
console.assert(getCardValue("A♥") === 11, "Test Failed: A♥ should return 11");
