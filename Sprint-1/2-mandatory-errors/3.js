const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
//The code will not work because cardnumber is not an array and the slice method can only be used on arrays
// Then run the code and see what error it gives.
//TypeError: cardNumber.slice is not a function
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// cardNumber is a number and not an array. yes this is what I predicted 
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
