const cardNumber = "4533787178994213";
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
// TypeError: cardNumber.slice is not a function. it was not the error i predicted, and  the difference is that i predicted that the code is correct just add console.log variable.
// How to fix this  error: first convert number "toString", then use .slice(-4);.
// The "toString()" method converts number to string.
// java script has trouble with large number so in this case we add the number in string("").
