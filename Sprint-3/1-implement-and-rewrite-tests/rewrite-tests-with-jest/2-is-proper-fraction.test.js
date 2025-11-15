// Sprint-3/1-implement-and-rewrite-tests/rewrite-tests-with-jest/2-is-proper-fraction.test.js

// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

test("should return true for a proper fraction (numerator < denominator)", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 2: Identify Improper Fractions:
// When the numerator is greater than or equal to the denominator,
// Then the function should return false
test("should return false for an improper fraction (numerator > denominator)", () => {
  expect(isProperFraction(5, 2)).toEqual(false);
});

// Case 3: Identify Negative Fractions:
// When the numerator is negative but absolute value < denominator,
// Then the function should return true
test("should return true for a negative proper fraction (|numerator| < denominator)", () => {
  expect(isProperFraction(-4, 7)).toEqual(true);
});

// Case 4: Identify Equal Numerator and Denominator:
// When the numerator is equal to the denominator,
// Then the function should return false
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toEqual(false);
});

// When the numerator is negative but |numerator| >= denominator,
// Then the function should return false
test("should return false for a negative improper fraction (|numerator| >= denominator)", () => {
  expect(isProperFraction(-8, 7)).toEqual(false);
});

// When the numerator is zero,
// Then the function should return true
test("should return true when numerator is zero", () => {
  expect(isProperFraction(0, 5)).toEqual(true);
});

// When the denominator is zero,
// Then the function should throw an error
test("should throw an error when denominator is zero", () => {
  expect(() => {
    isProperFraction(3, 0);
  }).toThrow("Denominator cannot be zero");
});

// When the numerator or denominator is not an integer,
// Then the function should throw an error
test("should throw an error when numerator or denominator is not an integer", () => {
  expect(() => {
    isProperFraction(2.5, 4);
  }).toThrow("Numerator and denominator must be integers");

  expect(() => {
    isProperFraction(3, "5");
  }).toThrow("Numerator and denominator must be integers");
});


// Sprint-3/1-implement-and-rewrite-tests/implement/3-get-card-value.js
// This function takes a card string (e.g., "A♠", "10♥", "K♦") and returns its value in a game of cards.
function getCardValue(card) {
  // Extract rank by removing suit symbol (last character)
  const rank = card.slice(0, -1);

  // Map face cards to values
  const faceValues = {
    J: 10,
    Q: 10,
    K: 10,
    A: 11,
  };

  // Return mapped value if rank is a face card
  if (faceValues[rank]) {
    return faceValues[rank];
  }

  // Convert to number and validate numeric cards (2–10)
  const numericValue = Number(rank);
  if (!isNaN(numericValue) && numericValue >= 2 && numericValue <= 10) {
    return numericValue;
  }

  // Invalid card
  throw new Error("Invalid card rank");
}

module.exports = getCardValue;
