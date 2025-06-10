const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// cardNumber is number and func slice() work with strings
// Then run the code and see what error it gives.
//the error is : TypeError: cardNumber.slice is not a function
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
//first we should change the type of cardNumber to string 
