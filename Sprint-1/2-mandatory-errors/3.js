const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// CardNumber is not a funtion so it does not have the method slice.

// Then run the code and see what error it gives.
// TypeError: cardNumber.slice is not a function
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
//this is what I predicted because slice is a method for strings and arrays, not numbers.
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


const last4DigitsCorrected = cardNumber.toString().slice(-4);

console.log(last4DigitsCorrected); // Should output: 4213