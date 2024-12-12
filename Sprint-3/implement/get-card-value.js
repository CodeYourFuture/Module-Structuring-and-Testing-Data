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
  if (typeof card !== "string") return "Input should be a sting.";
  const cardValue = card
    .toUpperCase()
    .substring(0, card.indexOf(card.slice(-1)));
  const faceCards = ["K", "Q", "J"];

  /* If we wanted to exlude cards for not being a suite
   const suites = ["♣", "♠", "♦", "♥"];
   if (!suites.includes(card.slice(-1))) return "Invalid card rank.";
  */
  if (Number(cardValue) && Number(cardValue) >= 2 && Number(cardValue) <= 10)
    return Number(cardValue);
  if (faceCards.includes(cardValue)) return 10;
  if (cardValue === "A") return 11;

  return "Invalid card rank.";

  /* ### I'm not a fan of if/if else statements so I would have either used ternary operators or short circuiting.
  return Number(cardValue)
    ? Number(cardValue)
    : faceCards.includes(cardValue)
    ? 10
    : cardValue === "A"
    ? 11
    : "Invalid card rank.";

    OR

    return (
    (Number(cardValue) && Number(cardValue)) ||
    (faceCards.includes(cardValue) && 10) ||
    (cardValue === "A" && 11) ||
    "Invalid card rank."
  );
  */
}

module.exports = getCardValue;

console.log(getCardValue("2♣ two of clubs".split(' ')[0]));
