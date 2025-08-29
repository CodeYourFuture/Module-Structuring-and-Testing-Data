const cardNumber = 4533787178994213;

// We want last4Digits to store the last 4 digits of cardNumber

// Prediction before running:
// This will cause an error because cardNumber is a number,
// and numbers don't have the slice() method. slice() works only on strings or arrays.

// Running the code would give:
// TypeError: cardNumber.slice is not a function

// Why?
// Because slice() is not defined for numbers in JavaScript.

// Fix:
// Convert cardNumber to a string first, so we can use slice() on it.
// Then slice the last 4 characters to get the last 4 digits.

const last4Digits = String(cardNumber).slice(-4);

console.log(last4Digits);       // Output: 4213

