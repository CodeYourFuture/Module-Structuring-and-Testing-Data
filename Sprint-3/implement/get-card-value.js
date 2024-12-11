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
  const cardValue = card
    .toUpperCase()
    .substring(0, card.indexOf(card.slice(-1)));
  const faceCards = ["K", "Q", "J"];

  /* If we wanted to exlude cards for not being a suite
   const suites = ["♣", "♠", "♦", "♥"];
   if (!suites.includes(card.slice(-1))) return "Invalid card rank.";
  */

  if (Number(cardValue)) return Number(cardValue);
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

// I've chosen to create an object of test criteria to do my assertions on.
const testData = [
  {
    input: "A♣",
    currentOutput: getCardValue("A♣"),
    targetOutput: 11,
  },
  {
    input: "q♦",
    currentOutput: getCardValue("q♦"),
    targetOutput: 10,
  },
  {
    input: "10♠",
    currentOutput: getCardValue("10♠"),
    targetOutput: 10,
  },
  {
    input: "4♣",
    currentOutput: getCardValue("4♣"),
    targetOutput: 4,
  },
  {
    input: "W♣",
    currentOutput: getCardValue("W♣"),
    targetOutput: "Invalid card rank.",
  },
  {
    input: "x♥",
    currentOutput: getCardValue("x♥"),
    targetOutput: "Invalid card rank.",
  },
];

// Used the map array method to iterate through the test data.
testData.map((data) =>
  console.assert(
    data.currentOutput === data.targetOutput,
    `Input value: ${data.input} Current output: ${data.currentOutput}, Expected output: ${data.targetOutput}`
  )
);
