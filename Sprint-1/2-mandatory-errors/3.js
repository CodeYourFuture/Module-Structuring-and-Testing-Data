const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


//My Prediction is that index numbers cannot be in negative which is why this code wont work
//The error is that cardNumber.slice is not a function. I did not predict this. I read 
//documentation and it says that .slice cannot be used on numbers, it can be only used on 
//strings, therefore to make it work we need to convert our cardNumber into a string first.

const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

//Now this will work.