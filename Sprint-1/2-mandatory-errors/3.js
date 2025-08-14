//const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);
//console.log(last4Digits);
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// prediction: unsure as to what will happen, as i haven`t used or come across slice before.

// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// The error occurs because `cardNumber` is a number, and the `slice` method is not available on numbers.
// To fix this, we need to convert `cardNumber` to a string before using the `slice` method.
// Fix the code by converting cardNumber to a string
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
// Now the code should work correctly and print the last 4 digits of the card number
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
