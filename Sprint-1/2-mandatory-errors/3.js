const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


//It will throw an error because cardNumber is a number, not a string — and .slice() is a method for strings and arrays, not numbers.

const cardNumber = 4533787178994213;
//convert number to string before using slice
const last4Digits = cardNumber.toString().slice(-4);
//log the last 4 digits
console.log(last4Digits);

//outcome 4213