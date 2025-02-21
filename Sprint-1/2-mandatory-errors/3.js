const cardNumber = 4533787178994213;
const cardNumberStr=cardNumber.toString();// convert number to string 
const last4Digits = cardNumberStr.slice(-4);
console.log(last4Digits);
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
//type error  cardNumber.slice is not a function
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
