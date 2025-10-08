// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);


// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


// Answer
// The code will not work because the slice method in javascript only works on a string or an array. 
// The data type of the value stored in the variable cardNumber is a number and for this reason, the code will return an error.
// After running the code, it gave an error " TypeError: cardNumber.slice is not a function"
// My prediction and the error align.
// To update the code, I will convert the variable cardNumber to a string first then use slice() method after

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
