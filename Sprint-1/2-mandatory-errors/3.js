const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
// I think the code won't work because the slice() works only on strings, and cardNumber is a number.
// The error says that slice() its not a function because cardNumber is a number. Converting it to a string("4533787178994213") will fix the problem.