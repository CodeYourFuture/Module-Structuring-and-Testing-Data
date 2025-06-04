/*
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);
*/

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Prediction: The code will throw an error because `cardNumber` is a number, and the `slice` method does not work on numbers.
// TypeError: cardNumber.slice is not a function.
// The reason is that `slice` is a method for strings and arrays, not for numbers.
// To fix this, we can convert the number to a string before using the `slice` method.
// Corrected code:

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// Now, the last4Digits variable will correctly store the last 4 digits of cardNumber as a string.

console.log(last4Digits); // Output: 4213
