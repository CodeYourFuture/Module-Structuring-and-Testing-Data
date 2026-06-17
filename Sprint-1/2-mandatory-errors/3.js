const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working

// Before running the code, make and explain a prediction about why the code won't work
// .Slice only works on strings, not numbers. Therefore, the code will throw an error 

// Then run the code and see what error it gives.
// Uncaught TypeError: cardNumber.slice is not a function

// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// The error is what I predicted. The slice method is not a function that can be used on numbers, only strings.

// Then try updating the expression last4Digits is assigned to, in order to get the correct value
const last4Digits = cardNumber % 10000;
