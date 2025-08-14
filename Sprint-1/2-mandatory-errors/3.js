const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//prediction
//running will cause an issue because we are trying to slice a number and slice only works on string
// we should first convert cardNumber into a string before we slice

// after running the code we are getting the following error:TypeError: cardNumber.slice is not a function
// javascript seems to not being explicit when it comes to error messages
