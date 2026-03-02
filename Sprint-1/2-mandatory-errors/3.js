/** Original code:
 *
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);
*/

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/** Prediction
The code won't work because cardNumber is defined as a number (4533787178994213), but the .slice() method is a string method. Numbers don't have a .slice() method.
When the code runs, JavaScript will throw a TypeError saying:
cardNumber.slice is not a function
*/

/**
 * Running:
 * When running the code we get.
 * TypeError: cardNumber.slice is not a function
 *
 * This matches prediction above that the error occurs because we're trying to use a string method on a number.
 */

/**
 * Why the error occurs:
.slice() is a method that belongs to the String and Array prototypes, not the Number prototype. When JavaScript tries to execute cardNumber.slice(-4), it looks for a slice property on the number object, and can't find it, and throws a TypeError message.
 */

/** Fixing the code
To get the last 4 digits correctly, we need to convert the number to a string first then performs the operation.
*/

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits); // "4213"
