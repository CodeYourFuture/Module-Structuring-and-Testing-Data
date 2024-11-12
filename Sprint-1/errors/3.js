const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/* The slice function works with arrays and cardNumber was initially just one
long number so while the TypeError given during debugging is that cardNumber.slice is not a function,
it is actually that there is no array for the slice to work. By adding commas to 
separate the integers in the const array and then running the code, it works */