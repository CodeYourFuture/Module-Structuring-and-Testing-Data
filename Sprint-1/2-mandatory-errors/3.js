const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


// By looking at the code I noticed that the value of const cardNumber wasn't a string  as it wasn't in parenthesis.
// TypeError: cardNumber.slice is not a function - error in the terminal.
// We get this error because cardNumber is a number not a string and .slice() is a method used for strings and arrays.
// I added .toString() to change cardNumber to string.