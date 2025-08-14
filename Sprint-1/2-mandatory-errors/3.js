

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
//I predict the code won't work because .slice() is used on a number, but it only works on strings or arrays. 

// Then run the code and see what error it gives.
//.slice() is a string method and cardNumber is a number, not a string. Numbers don't have .slice();

// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
//TypeError: cardNumber.slice is not a function

// Then try updating the expression last4Digits is assigned to, in order to get the correct value
