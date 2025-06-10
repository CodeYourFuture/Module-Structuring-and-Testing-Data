//const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working

// Before running the code, make and explain a prediction about why the code won't work
// Prediction: Code will run if las4Digits is called

// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
//Answer: Upon reviewing the docs I found that slice only works on a String or Array and not on numbers

// Then try updating the expression last4Digits is assigned to, in order to get the correct value

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
