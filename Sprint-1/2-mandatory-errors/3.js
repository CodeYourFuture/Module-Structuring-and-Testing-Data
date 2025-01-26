const cardNumber = 4533787178994213;
let text = cardNumber.toString();
const last4DigitsString = text.slice(-4);
const last4Digits = Number(last4DigitsString);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Computer was trying to use a string method for numbers. its failed.
// I introduced new variable text. and put num converted to string and after use slice method.
