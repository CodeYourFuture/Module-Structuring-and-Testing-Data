const getCardValue = require("./3-get-card-value");

// Test for Ace of Spades
test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10)
test("should return the numeric value corresponding to the rank", () => {
  // Loop through numbers 2 to 10 and test each card
  for (let i = 2; i <= 10; i++) {
    const card = `${i}♥`; 
    const result = getCardValue(card);  
    expect(result).toEqual(i);  
  }
});

// Case 3: Handle Face Cards (J, Q, K)
test("should return 10, for face cards (J, Q, K)", () => {
  const jackofHearts = getCardValue("J♥");
  const queenofHearts = getCardValue("Q♥");
  const kingofHearts = getCardValue("K♥");
  expect(jackofHearts).toEqual(10); 
  expect(queenofHearts).toEqual(10); 
  expect(kingofHearts).toEqual(10); 
});

// Case 4: Handle Ace (A)
test("should return 11 for Ace (A)", () => {
  const aceofHearts = getCardValue("A♥");
  expect(aceofHearts).toEqual(11);
});

// Case 5: Handle Invalid Cards
test("should return 'Invalid Card Rank' for invalid card ranks", () => {
  const joker = getCardValue("1🃏");
  expect(joker).toEqual("Invalid Card Rank");
});
