const cardNumber = 4533787178994213;
const last4Digits = +cardNumber.toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// TypeError: cardNumber.slice is not a function
// We can t use slice() method to numbers, only strings or arrays
// At the beginning we need to change the value of our variable to string by tostring() method;
// Then by adding + we convert the extracted string back into a number.
