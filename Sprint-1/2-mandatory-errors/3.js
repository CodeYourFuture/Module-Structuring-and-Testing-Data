const cardNumber = 4533787178994213;
const last4Digits = Number(String(cardNumber).slice(-4));

console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Slice method can be used on strings and arrays, not on numbers.
// The error message is telling that slice is not a function, but this happens because number don't have a slice method.
// I have used String(cardNumber) to convert the number to a string, so that the slice method can be used on it.
// Then the 4 digit string is converted back to a number with Number(string) to match the expected type.
