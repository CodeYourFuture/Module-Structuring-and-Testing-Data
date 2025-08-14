const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


This will give an error because cardNumber is a number, and .slice() is a method that only works on strings or arrays — not numbers.
for this to work we need to change the card number to a string

const cardNumber = "4533787178994213"; // use quotes to make it a string
const last4Digits = cardNumber.slice(-4);
