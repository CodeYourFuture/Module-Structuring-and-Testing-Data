const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);
// prediction: The code will not work because the `slice` method is being called on a number and has not yet been converted into a string.

//this code will throw an error.
console.log(last4Digits);
// The error i was given: cardNumber.slice is not a function
// Explanation: The error occurs because cardNumber is a number, and the slice method is for a string method.

// To fix this, we need to convert `cardNumber` to a string before using the `slice` method by adding .toString() to the cardNumber variable.
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits); // This should now correctly log "4213"

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
