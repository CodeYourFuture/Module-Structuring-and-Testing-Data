//const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working

// Before running the code, make and explain a prediction about why the code won't work
// # Prediction: The code will throw an error because cardNumber is a number, and the slice method is not applicable to numbers.

// Then run the code and see what error it gives.
// # Running the code will confirm the prediction : it throws an error saying that the slice method is not a function

// Consider: Why does it give this error? Is this what I predicted? If not, what's different?

// Then try updating the expression last4Digits is assigned to, in order to get the correct value
// # To fix this, we can convert cardNumber to a string before using the slice method

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(`The last 4 digits of the card number are ${last4Digits}`);
// The last 4 digits of the card number are 4213
// The code now works correctly and outputs the last 4 digits of the card number
