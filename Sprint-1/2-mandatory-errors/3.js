const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working

// Before running the code, make and explain a prediction about why the code won't work
/* I predict that the code will fail because cardNumber is a number, and numbers do not have a .slice() method.
.slice() only workon strings and arrays. Since JavaScript cannot call .slice() on a number, it will throw a TypeError.  */                                                                     

// Then run the code and see what error it gives.
// It gives TypeError: cardNumber.slice is not a function.

// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
//JavaScript throws the TypeError because numbers do not have the.slice() method and therefore cannot be sliced and cardNumber is a number.

// Then try updating the expression last4Digits is assigned to, in order to get the correct value
const last4Digits = String(cardNumber).slice(-4);
console.log(last4Digits);
