// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - 
// the last character will always be an emoji for a suit, and all characters
// before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank 
// (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each
//  in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."


function IdentifyNumberCard (input){
  //we validate and convert into str and upperCase before to compare with our local var
  const chain = input.toString().toUpperCase();

  //Option that we want to check
  const faceCards = ["K", "J", "Q", "10"];
  const ace = "A";
  const numberCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const suits = ["♠", "♥", "♣", "♦"];

  if (faceCards.includes(chain)) {
    return 10;
  }
  //!isNaN(chain) ensures that chain is a valid number or a string representation of a number.
  //to validate the string and verify is a number or string ("abc")=> false, ("1")=>true
  //!isNaN is not a number? true is number. && convert the chain into number and compare if the input is the NumberCard
  if (!isNaN(chain) && numberCards.includes(Number(chain))) {
    return Number(chain);
  }

  if (chain === ace) {
    return 11;
  }
  //Handle Invalid Cards:
  throw new Error("Invalid card rank."); // throw does no return values only parameter that does not include the functions
}

console.log(IdentifyNumberCard(2));