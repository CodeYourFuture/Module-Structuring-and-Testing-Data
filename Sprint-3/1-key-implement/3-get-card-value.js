// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers

function getCardValue(card) {

  let cards = card.slice(0,-1); // drop one last letter from string 

  const rank1= ["J","Q","K"];
  
  if (cards === "A")  // if the input is A return 11
    {
      return 11;
    }
  else if (card == "Ace")  // if the input is Ace return 11
      {
        return 11; 
      }

  else  if (cards.length ==1 && rank1.includes(cards) ) // input length is 1 and input is in rank 1 return 10;
  {
     return 10;
  }

  else if (cards === "10") // if input is 10 return 10;
    {
      return 10;
    }            
  

else if (cards.length ==1 && rank1.includes(cards)=== false) // if input length is 1 & not include in rank1 
{
  value = Number(cards);                       // convert the input into number and return the value
  return value;  
}
  
else if (cards.length ==2 && cards != "10") // if input length is 2 and not equal to 10 return invalid
{
  return `The card is invalid`;
}

  
    

}

// You need to write assertions for your function to check it works in different cases
// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);
console.log(`A is equal to ${aceofSpades}`);

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts,5);
console.log(`The result is ${fiveofHearts}`);

const twofHearts = getCardValue("2♥");
assertEquals(twofHearts,2);
console.log(`The result is ${twofHearts}`);
// ====> write your test here, and then add a line to pass the test in the function above

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
const jack = getCardValue("J♥");
assertEquals(jack,10);
console.log(`J is equal to ${jack}`);

const tenHeart = getCardValue("10♥");
assertEquals(tenHeart,10);
console.log(`The result is ${tenHeart}`);
// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.
const Ace = getCardValue("Ace");
assertEquals(Ace,11);
console.log(`The result is ${Ace}`);
// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."

const invalidNumber = getCardValue("15♠");
console.log(`${invalidNumber}`);
