// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/** 
 *Prediction: Why won’t this code work?
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

The issue is that .slice() is a string method, but cardNumber here is a number — not a string.
So when the code runs, JavaScript will say something like:
TypeError: cardNumber.slice is not a function
That’s because .slice() function only works on strings or arrays — and numbers don’t have that method.

Fixing the problem:
To use .slice(), we need to convert the number into a string first:
*/

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits); // "4213"

