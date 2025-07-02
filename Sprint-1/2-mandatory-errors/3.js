// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// console.log(`The last 4 digits of the card number are: ${last4Digits}`);

// The error occurs because the `slice` method is being called on a number, which is not a valid operation.
// The `slice` method is a string method, and it cannot be directly applied to a number.
// To fix this error, we need to convert the `cardNumber` to a string before using the `slice` method.
// We can do this by wrapping `cardNumber` in the `String()` function or using the `toString()` method.
// Here's the corrected code:
const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
console.log(`The last 4 digits of the card number are: ${last4Digits}`);
// Now, the code will correctly output the last 4 digits of the card number, which are "4213".
