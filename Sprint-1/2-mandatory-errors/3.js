/* The old code:
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);
*/

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/* My prediction: The code will give an error because the minus sign(-4) and slice works only with strings, not numbers.

Consideration: The error is a TypeError: cardNumber.slice is not a function. mostly it was because I predicted that numbers do not have a slice method. About the minus sign, I have learned about positive and negative indexing in strings, now I can see the difference.


To fix this, we need to convert cardNumber to a string before calling the slice method.
*/

// Updated code:
const cardNumber = 4533787178994213;
const last4DigitsCorrected = cardNumber.toString().slice(-4);
console.log(last4DigitsCorrected);
