// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.

// A valid card string will contain a rank followed by the suit.
// The rank can be one of the following strings:
//   "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
// The suit can be one of the following emojis:
//   "♠", "♥", "♦", "♣"
// For example: "A♠", "2♥", "10♥", "J♣", "Q♦", "K♦".

// When the card is an ace ("A"), the function should return 11.
// When the card is a face card ("J", "Q", "K"), the function should return 10.
// When the card is a number card ("2" to "10"), the function should return its numeric value.

// When the card string is invalid (not following the above format), the function should
// throw an error.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function getCardValue(card) {
  const suits = ["♠", "♥", "♦", "♣"];

  const values = {
    A: 11,
    J: 10,
    Q: 10,
    K: 10,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
  };

  const suit = card.slice(-1);
  const rank = card.slice(0, -1);

  if (!suits.includes(suit) || !(rank in values)) {
    throw new Error("Invalid card");
  }

  return values[rank];
}

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
assertEquals(getCardValue("A♠"), 11);
assertEquals(getCardValue("2♥"), 2);
assertEquals(getCardValue("9♣"), 9);
assertEquals(getCardValue("10♦"), 10);
assertEquals(getCardValue("J♠"), 10);
assertEquals(getCardValue("Q♥"), 10);
assertEquals(getCardValue("K♣"), 10);

console.log("All valid card tests passed");

// What other invalid card cases can you think of?

try {
  getCardValue("1♠");
  console.error("Error was not thrown for 1♠ 😢");
} catch (e) {
  console.log("Error thrown for 1♠ 🎉");
}

try {
  getCardValue("11♠");
  console.error("Error was not thrown for 11♠ 😢");
} catch (e) {
  console.log("Error thrown for 11♠ 🎉");
}

try {
  getCardValue("A");
  console.error("Error was not thrown for A 😢");
} catch (e) {
  console.log("Error thrown for A 🎉");
}

try {
  getCardValue("♠");
  console.error("Error was not thrown for ♠ 😢");
} catch (e) {
  console.log("Error thrown for ♠ 🎉");
}

try {
  getCardValue("KH");
  console.error("Error was not thrown for KH 😢");
} catch (e) {
  console.log("Error thrown for KH 🎉");
}

try {
  getCardValue("");
  console.error("Error was not thrown for empty string 😢");
} catch (e) {
  console.log("Error thrown for empty string 🎉");
}
