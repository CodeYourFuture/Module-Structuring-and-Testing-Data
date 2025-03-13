const cardNumber = 4533787178994213;  // fist method : adding double code to solve the error 
const last4Digits = String(cardNumber).slice(-4); // second method : converting to String and take out last four digit.

console.log(`The last 4 digits are ${last4Digits}`);

// The error is cause of function call on the wrong object (integer)

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
