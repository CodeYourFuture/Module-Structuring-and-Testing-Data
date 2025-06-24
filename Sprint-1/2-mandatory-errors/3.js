const cardNumber = 4533787178994213;
// Prediction: The code will not work because the `slice` method is being called on a number type (`cardNumber`),
// and the `slice` method is a string method. In JavaScript, numbers do not have a `slice` method.
// Running the code will likely result in a TypeError.

const last4Digits = cardNumber.toString().slice(-4); // Convert cardNumber to a string first
console.log(`The last 4 digits of the card number are ${last4Digits}`);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
