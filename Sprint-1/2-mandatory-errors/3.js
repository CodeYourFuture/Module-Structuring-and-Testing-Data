const cardNumber = 4533787178994213;

const cardNumberString = String(cardNumber); // Type conversion
const last4Digits = cardNumberString.slice(cardNumberString.length - 4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Prediction: slice takes an index or index range, and I don't think you can have negative indexes, so that will be the error.
// Outcome: says '.slice' is not a function
// Fix: convert cardNumber to string for the slice method to work

// Output
console.log(last4Digits);
