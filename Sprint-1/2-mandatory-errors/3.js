const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Prediction: The code will not work because the `slice` method is being called on a number (cardNumber), which does not have a `slice` method. The `slice` method is typically used with strings or arrays, not numbers.
// Running the code will likely result in a TypeError indicating that `slice` is not a function or is not defined for the number type.
// Running the code confirms the prediction, as it throws an error: "TypeError: cardNumber.slice is not a function".
// To fix this, we need to convert the cardNumber to a string before using the `slice` method.
const last4Digits = String(cardNumber).slice(-4);
// Now, last4Digits will correctly store the last 4 digits of cardNumber.
console.log(`The last 4 digits of the card number are: ${last4Digits}`);
// This will output: "The last 4 digits of the card number are: 4213"

// The code now works correctly, and the last4Digits variable contains the last four digits of the card number as a string.
// The final output will be "The last 4 digits of the card number are: 4213".   