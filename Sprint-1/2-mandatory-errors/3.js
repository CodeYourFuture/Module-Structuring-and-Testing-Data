//const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);

//My prediction was the long card number isn't a string so js will assume it's a variable
//Error given: cardNumber.slice is not a function
//added String function


// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
