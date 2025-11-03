// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");


// Case 4: Handle Ace (A):
test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
test("should return correct values for number cards", () => {
  expect(getCardValue("5♥")).toEqual(5);
  expect(getCardValue("10♦")).toEqual(10);
});


// Case 3: Handle Face Cards (J, Q, K):
test("should return for face cards J, Q, K", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♠")).toEqual(10);
});



// Case 5: Handle Invalid Cards:
test("throws an error or invalid card", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card");
});

test("should throw error for malformed numeric input", () => {
  expect(() => getCardValue("2.9999♠")).toThrow("Invalid card rank");
});

test("should throw error for repeated characters in rank", () => {
  expect(() => getCardValue("3AAAA♠")).toThrow("Invalid card rank");
});

test("should throw error for number beyond valid range", () => {
  expect(() => getCardValue("11♠")).toThrow("Invalid card rank");
});

test("should throw error for missing suit", () => {
  expect(() => getCardValue("Q")).toThrow("Invalid card rank");
});

test("should throw error for non-string input", () => {
  expect(() => getCardValue(5)).toThrow("Card must be a string");
});

try {
getCardValue("Z♠");
} catch (error) {
console.log("Caught error:", error.message);
}


