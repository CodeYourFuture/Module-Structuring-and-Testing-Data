const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// PREDICTION: The code won't work because cardNumber is a number, but .slice() only works on strings and arrays
// ERROR: TypeError: cardNumber.slice is not a function
// SOLUTION: Convert the number to a string first using .toString() method
console.log(last4Digits); // Should output: "4213"
//The issue is that cardNumber is a number, but the .slice() method only works on strings (and arrays).
// Convert the number to a string first, then use .slice()