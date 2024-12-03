// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//consider : TypeError: cardNumber.slice is not a function
//explaining why the code does not work:
//it only works if you first convert the number into string:
let cardNumber = 4533787178994213;
cardNumber = cardNumber.toString();
const last4Digits = cardNumber.slice(-4);
console.log("last 4 digits of the card: ", last4Digits);
