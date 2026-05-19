const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Prediction: I think the code won't work because cardNumber is a number and the
//  slice method is for strings. So, it will give an error that slice is not a function.

// Error: TypeError: cardNumber.slice is not a function
// It was what I predicted. This is because it occurs because cardNumber is a number,
// and numbers do not have the slice method. To fix this, we can convert cardNumber 
// to a string before using the slice method.

// Fix: I converted cardNumber to a string using the toString() method, and then
// I used the slice method to get the last 4 digits. The updated code is above.

console.log(last4Digits);

