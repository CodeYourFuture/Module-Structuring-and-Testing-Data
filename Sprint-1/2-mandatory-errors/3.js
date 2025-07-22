const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
console.log(`The last 4 digits of the card number are: ${last4Digits}`);
// The error occurs because 'cardNumber' is a number, and the 'slice' method is not available on numbers.
// To fix this, we can convert 'cardNumber' to a string before using the 'slice' method.
const last4DigitsFixed = cardNumber.toString().slice(-4);
console.log(`The last 4 digits of the card number are: ${last4DigitsFixed}`);
// Now the code works correctly and prints the last 4 digits of the card number.
// The output will be: The last 4 digits of the card number are: 4213
// This is the expected output, as it correctly extracts the last 4 digits from the card number.
