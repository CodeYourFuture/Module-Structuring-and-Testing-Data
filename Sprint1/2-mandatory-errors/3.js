const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


// The card number is not declared as a fixed unit = a string, it is just a set of numbers. 
// Also, the slice method is only suitable for strings.

// First the card number needs to become a string, Then it can be sliced. 

const last4Digits = String(cardNumber).slice(-4);
console.log(`The last 4 digits of the card number are ${last4Digits}`);


