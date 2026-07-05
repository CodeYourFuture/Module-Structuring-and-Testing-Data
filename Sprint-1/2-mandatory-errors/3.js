const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
//It didn't work because the method only works for strings so to make it work the card number should be saved as a string.