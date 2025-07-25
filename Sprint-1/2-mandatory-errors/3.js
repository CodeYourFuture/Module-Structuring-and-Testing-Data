const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
console.log(last4Digits); 


// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// The code will not work because `cardNumber` is a number, 
// and the `slice` method is not available on numbers. 
// The `slice` method is a string method, so we need to convert 
// `cardNumber` to a string first.
// The prediction is correct, and the error stated:
// cardNumber.slice is not a function"
// After converting `cardNumber` to a string, the code now works correctly.
// The last4Digits variable now correctly stores the last 4 digits of cardNumber
// The Output is "4213"