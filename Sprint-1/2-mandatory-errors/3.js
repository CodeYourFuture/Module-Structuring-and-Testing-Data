const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4); // This will throw an error

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//The code will not work because cardNumber is a number, and the .slice() method is used for strings, not numbers.
// The .slice() method cannot be used directly on a number, which will lead to an error.
//TypeError: cardNumber.slice is not a function.
//This happens because .slice() is a method that only works on strings and arrays, but cardNumber is a number.
// You can't call .slice() on a number.
//To fix this, we need to convert the number to a string before using .slice() to extract the last 4 digits:

const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);  // Convert to string first
console.log(last4Digits);  // This will output "4213"
