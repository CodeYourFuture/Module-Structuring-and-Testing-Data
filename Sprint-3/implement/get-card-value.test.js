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
    if (Number(card[0]) >= 2 && Number(card[0]) <= 9){
        return Number(card[0]);
    } else if (card.slice(0,2) === "10" || card[0] === "J" || card[0] === "Q" || card[0] === "K") {
        return 10;
    } else if (card[0] === "A") {
        return 11;
    } else{
        return "Invalid card rank";
    }
}

let card = getCardValue("12♠");
// console.log(card);

// console.assert tests
// Test 1
const currentOutput1 = getCardValue("2♠");
const targetOutput1 = 2;
console.log(currentOutput1);
console.assert(currentOutput1 === targetOutput1, `${currentOutput1} is not equal ${targetOutput1}`);

// Test 2
const currentOutput2 = getCardValue("5♦");
const targetOutput2 = 5;
console.log(currentOutput2);
console.assert(currentOutput2 === targetOutput2, `${currentOutput2} is not equal ${targetOutput2}`);

// Test 3
const currentOutput3 = getCardValue("9♡");
const targetOutput3 = 9;
console.log(currentOutput3);
console.assert(currentOutput3 === targetOutput3, `${currentOutput3} is not equal ${targetOutput3}`);

// Test 4
const currentOutput4 = getCardValue("10♣");
const targetOutput4 = 10;
console.log(currentOutput4);
console.assert(currentOutput4 === targetOutput4, `${currentOutput4} is not equal ${targetOutput4}`);

// Test 5
const currentOutput5 = getCardValue("Q♣");
const targetOutput5 = 10;
console.log(currentOutput5);
console.assert(currentOutput5 === targetOutput5, `${currentOutput5} is not equal ${targetOutput5}`);

// Test 6
const currentOutput6 = getCardValue("A♦");
const targetOutput6 = 11;
console.log(currentOutput6);
console.assert(currentOutput6 === targetOutput6, `${currentOutput6} is not equal ${targetOutput6}`);

// Test 7
const currentOutput7 = getCardValue("12♦");
const targetOutput7 = "Invalid card rank";
console.log(currentOutput7);
console.assert(currentOutput7 === targetOutput7, `${currentOutput7} is not equal ${targetOutput7}`);

// Jest tests
test("value of card", () => {
    expect(getCardValue("2♠")).toBe(2);
    expect(getCardValue("5♦")).toBe(5);
    expect(getCardValue("9♡")).toBe(9);
    expect(getCardValue("10♣")).toBe(10);
    expect(getCardValue("Q♣")).toBe(10);
    expect(getCardValue("A♦")).toBe(11);
    expect(getCardValue("12♦")).toBe("Invalid card rank");
});