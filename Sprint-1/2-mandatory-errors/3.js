const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber

// However, the code isn't working
// the error is that slice is not a function for numbers, it is a function for strings and arrays

// Before running the code, make and explain a prediction about why the code won't work
// My prediction is that the code will give an error because slice is not a function for numbers

// Then run the code and see what error it gives.
// typeError: cardNumber.slice is not a function

// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// It gives this error because slice is not a function for numbers, it is a function for strings and arrays. This is what I predicted.

// Then try updating the expression last4Digits is assigned to, in order to get the correct value
const cardNumberString = cardNumber.toString();
const last4DigitsCorrected = cardNumberString.slice(-4);
console.log(last4DigitsCorrected); // Should print 4213
