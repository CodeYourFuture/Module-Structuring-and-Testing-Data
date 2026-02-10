const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
//I think it won't work because slice is not used for numbers, it's used for strings and arrays. 
console.log(last4Digits);
// It gives an error because cardNumber is a number and slice is a method for strings and arrays. 

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
