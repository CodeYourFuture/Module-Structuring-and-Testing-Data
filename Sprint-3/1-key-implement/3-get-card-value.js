function getCardValue(card) {

  if (card.length != 2 && card.length != 3) {
    console.error('Invalid card');
    return;
  }


  //get suit from card string
  const suit = card.slice(-1); //returns just the last character
  const rank = card.slice(0,-1); // returns everything except the last character


  // make array of number ranks only 0,1,..,10
  const numberRanks = [...Array.from({length:11}, (_,i) => i.toString())];

  // make array of all existing ranks, numbers and face cards 
  const allRanks = [...numberRanks,"A","J","Q","K"];


  if (["♠","♥","♦","♣"].includes(suit) && allRanks.includes(rank)) {

    //if the rank is a number, that is its value so just return that
      if (numberRanks.includes(rank)) {return Number(rank)};

    // if rank is Ace, then return 11
    if (rank === 'A') {return 11};

    // otherwise, rank is J Q or K, so return 10
    return 10;
  }

  else {console.error('Invalid card'); return;}
}


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

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const fiveOfHearts = getCardValue("5♥");
assertEquals(fiveOfHearts, 5);

// Handle card of rank 10:
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const tenOfHearts = getCardValue("10♥");
assertEquals(tenOfHearts, 10);

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.
const jackOfSpades = getCardValue("J♠");
assertEquals(jackOfSpades, 10);

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
const invalidRank = "D💩";
getCardValue(invalidRank);

