// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// My prediction.....

// after running the code i got message that TypeError: cardNumber.slice is not a function. 
//The error occurs because the slice method is intended for strings or arrays, and cardNumber is a numeric type. 
//This means the JavaScript engine doesn't recognize slice as a valid method for numbers.


// Fixing code....

// To fix the issue, you can first convert the number to a string, and then use slice. 
//Here’s the updated code:

const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
console.log(last4Digits); // This should output: 4213
