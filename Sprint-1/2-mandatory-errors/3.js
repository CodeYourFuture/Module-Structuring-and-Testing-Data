const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);

console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work

// .slice needs to act on a string not a number, so I would expect something like 'incorrect input' as an error

// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?

// TypeError: cardNumber.slice is not a function
// This is not exactly the words I expected the error to say but is correctly identifying the same error
// I think it is saying that cardNumber.slice is not a function of a number, hence the TypeError

// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// I converted cardNumber to a string and error resolved and it return the correct output
