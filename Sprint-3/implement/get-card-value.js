// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// 1. Given a card string in the format "A♠" (representing a card in blackjack -
// the last character will always be an emoji for a suit, and all characters
// before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// 2. Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank
// (e.g., "5" should return 5).

// 3. Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each
//  in blackjack.

// 4. Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// 5. Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."

// ========================= getCardValue ===========================

function getCardValue(input) {
  const rank = input.slice(0, -1);
  const suit = input.slice(-1);


  if (input === "10"){
    return 10;
  }else if (rank > 1 && rank < 11) {
    return Number(rank);
  } 
  else if (input === "A") 
    return 11;
  else if (input.toUpperCase() === "K" || input.toUpperCase() === "Q" || input.toUpperCase() === "J"){
    return 10;
  }

    if (suit !== "♠" && suit !== "♥" && suit !== "♣" && suit !== "♦" && input.length > 1) {
  return "Invalid card rank.";
  }
}


// ========================   Test cases console.log() =====================

// console.log(getCardValue("10")); // Output: 10
// console.log(getCardValue("10♠")); // Output: 10
// console.log(getCardValue("5♥")); // Output: 5
// console.log(getCardValue("A")); // Output: 11
// console.log(getCardValue("k$")); // output Invalid card rank.
// console.log(getCardValue("k")); // output 10


// ========================   Test console.assert  =====================

console.assert(getCardValue("10") === 10, "Test case failed for input '10'");
console.assert(getCardValue("10♠") === 10, "Test case failed for input '10♠'");
console.assert(getCardValue("5♥") === 5, "Test case failed for input '5♥'");
console.assert(getCardValue("A") === 11, "Test case failed for input 'A'");
console.assert(getCardValue("K") === 10, "Test case failed for input 'K'");
console.assert(getCardValue("3X") === "Invalid card rank.", "Test case failed for input '3X'");

console.log("All tests passed!");


// ========================== optimized version =======================

// function getCardValue(input) {
//   const validSuits = ["♠", "♥", "♣", "♦"];
//   const rank = input.length > 1 && isNaN(input) ? input.slice(0, -1) : input;
//   const suit = input.length > 1 ? input.slice(-1) : null;

//   // Validate suit if present
//   if (suit && !validSuits.includes(suit)) {
//     return "Invalid card suit.";
//   }

//   // Handle numeric cards
//   if (rank >= 2 && rank <= 10) {
//     return Number(rank);
//   }

//   // Handle face cards
//   if (["K", "Q", "J"].includes(rank.toUpperCase())) {
//     return 10;
//   }

//   // Handle Ace
//   if (rank.toUpperCase() === "A") {
//     return 11;
//   }

//   return "Invalid card rank.";
// }

// // Test cases
// console.log(getCardValue("10"));    // Output: 10
// console.log(getCardValue("10♠"));   // Output: 10
// console.log(getCardValue("5♥"));    // Output: 5
// console.log(getCardValue("A"));     // Output: 11
// console.log(getCardValue("K$"));    // Output: "Invalid card suit."
// console.log(getCardValue("K"));     // Output: 10
// console.log(getCardValue("11♥"));   // Output: "Invalid card rank."
