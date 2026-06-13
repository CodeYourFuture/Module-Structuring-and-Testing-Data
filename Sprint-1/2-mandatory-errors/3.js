const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work

The code didnt work because the slice method was called on an integer (cardNumber), 
but slice is a method that is only available for strings and arrays. 
Since cardNumber is an integer, it does not have the slice method, 
which will result in an error when the code is run.

// Then run the code and see what error it gives.
The error was: TypeError: cardNumber.slice is not a function

// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
It gives this error because the slice method is not meant for numbers. This is what I predicted, as I expected that calling slice on an integer would result in a TypeError.

// Then try updating the expression last4Digits is assigned to, in order to get the correct value

const last4Digits = cardNumber.toString().slice(-4);
