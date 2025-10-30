const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// i think the error will be that the slice method works for strings not numbers
//this code gives TypeError: cardNumber.slice is not a function, this is probably because of the issue i predicted
//but I don't know for sure base on the error code
//i will change the cardnumber into a string using String() in the last4Digits expression
