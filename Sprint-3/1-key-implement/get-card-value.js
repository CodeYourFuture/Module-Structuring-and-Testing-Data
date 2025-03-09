// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
    if (rank === "A") return 11;
    assertEquals(card, 11);
    console.assert(A === 11);
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
console.assert(A === 11);

function assertEquals(actualOutput, targetOutput) {
    console.assert(
        actualOutput === targetOutput,
        `Expected ${actualOutput} to equal ${targetOutput}`
    );
}

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const fiveofHearts = getCardValue("5♥");
assertEquals(fiveofHearts, 5);
console.assert(fiveofHearts === 5);

function assertEquals(actualOutput, targetOutput) {
    console.assert(
        actualOutput === targetOutput,
        `Expected ${actualOutput} to equal ${targetOutput}`
    );
}

// ====> write your test here, and then add a line to pass the test in the function above

function getCardValue(J, Q, K) {
    assertEquals(J, Q, K, "10");
    console.assert(J, Q, K === 10);
}

function assertEquals(actualOutput, targetOutput) {
    console.assert(
        actualOutput === targetOutput,
        `Expected ${actualOutput} to equal ${targetOutput}`
    );
}
const Ace = getCardValue("A"); {
    assertEquals(Ace, "11");
    console.assert(Ace === 11);
}

function assertEquals(actualOutput, targetOutput) {
    console.assert(
        actualOutput === targetOutput,
        `Expected ${actualOutput} to equal ${targetOutput}`
    );
}

function getCardValue(card) {
    assertEquals(card, 52);
    console.assert(card === 52);
    console.log("Invalid card rank");
}

function assertEquals(actualOutput, targetOutput) {
    console.assert(
        actualOutput === targetOutput,
        `Expected ${actualOutput} to equal ${targetOutput}`
    );
}
