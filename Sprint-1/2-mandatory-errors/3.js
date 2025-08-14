const cardNumber = 4533787178994213;
const cardNumberStr = cardNumber.toString();
const last4Digits = cardNumberStr.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
console.log(last4Digits);
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
//can not slice a number, the given card number is integer NOT a List or array
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
//fix by give double quotes to turn the number to sting or make a new variable assign cardNumber.toString()
