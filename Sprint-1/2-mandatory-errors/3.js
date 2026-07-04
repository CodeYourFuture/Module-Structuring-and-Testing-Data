// Prediction: .slice() is a string method, not a number method, so it will throw a TypeError.
// Error: TypeError: cardNumber.slice is not a function
// Fix: convert the number to a string first.

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits);
// The last4Digits variable should store the last 4 digits of cardNumber
