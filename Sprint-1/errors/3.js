const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work (The code will likely throw an error or produce an unexpected result because the slice() method on numbers in JavaScript doesn't work the same way as it does on strings.)
// Then run the code and see what error it gives. (Uncaught TypeError: cardNumber.slice is not a function)
// Consider: Why does it give this error? Is this what I predicted? If not, what's different? (Yes, it is what I predicted)
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

const cardNumberString = cardNumber.toString();
last4Digits = cardNumberString.slice(-4);
