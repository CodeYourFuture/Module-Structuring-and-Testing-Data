//const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);


// to fix the code, we'll convert the number to a string because .slice does not work on number data type
let cardNumber = 4533787178994213;
cardNumber = cardNumber.toString()
let last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//Answer
// We are not logging to the console
// The slice method should be a positive number to represent the index position.

console.log(last4Digits)
//TypeError: cardNumber.slice is not a function