const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);
const last4Digits = String(cardNumber).slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Answer: Missing console.log
// Then run the code and see what error it gives.
// Error:we had TypeError: cardNumber.slice is not a function
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// "cardNumber.slice" must declared as a function, this is not what i thought, the difference is that the code is incomplete and so will add a function
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


// After some research i found out that ".slice()" only works on strings so we have to convert the numbers into a string first
// Also learned abour method chaining