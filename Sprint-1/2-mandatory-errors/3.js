const cardNumber = 4533787178994213;   
const last4Digits = String(cardNumber).slice(-4); // convert to string and extract last 4 digit
console.log(last4Digits); //print4213
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//IN line 1  their was't  any string that may be the reason.
//With out changing code its says TypeError

/* how would you modify the code (through type conversion) so that it can still extract the last 4 digits from its value.
To use slice() method we need to use string.

