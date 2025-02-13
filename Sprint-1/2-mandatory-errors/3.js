const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(cardNumber);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working

// Before running the code, make and explain a prediction about why the code won't work
//I think there is an error no line 2.

// Then run the code and see what error it gives.
// Uncaught TypeError TypeError: cardNumber.slice is not a function

// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
/* cardNumber is a number type, slice() method cannon be applied to a number type, it has to be a string or arrays.
I did not see the error precisely, but now I know that i have to change the cardNumber 
type to string in order to perform slice() */

// Then try updating the expression last4Digits is assigned to, in order to get the correct value
// expression updated.