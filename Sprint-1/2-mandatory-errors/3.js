const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Prediction: The original code will throw a TypeError because .slice() is a string method,
// and cardNumber is a number, not a string. Numbers do not have a .slice() method.
// Fix: We use String(cardNumber) to convert the number to a string first,
// then call .slice(-4) to extract the last 4 characters: "4213".
