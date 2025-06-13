const cardNumber = "4533787178994213"; // This is a string representing a credit card number.
const last4Digits = cardNumber.slice(-4);
console.log(`The last 4 digits of the card number are ${last4Digits}`);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Prediction: The code won't run because slice is a method for strings and arrays, not for numbers.
// After running the code, I got an error saying "cardNumber.slice is not a function".
// It gives the operation slice is being performed on a value of unexpected/unsupported type.