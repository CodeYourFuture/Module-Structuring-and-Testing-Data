const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// I predict this code will not work because cardNumber is a number, not a string, and .slice() is a method that only works on strings or arrays. Since numbers don’t have a .slice() method, it will likely throw a TypeError.
// Ran the code, error message: TypeError: cardNumber.slice is not a function
// As predicted. .slice doesn't work on numbers. .slice() is a string method, and cardNumber is a number. 
// Corrected code:
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

