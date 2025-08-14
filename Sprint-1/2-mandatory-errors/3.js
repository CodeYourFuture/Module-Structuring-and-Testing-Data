const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
// const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
//.slice() is a method for strings and arrays, not numbers, and a cardNumber consist of number.
// after running the code, it gave TypeError: cardNumber.slice is not a function
// This was not what i predicted, and it gave the error due to javascript not recognising the command cardNumber.slice(-4);
// had to use the recognised command cardNumber.toString().slice(-4); for it to be recognised.