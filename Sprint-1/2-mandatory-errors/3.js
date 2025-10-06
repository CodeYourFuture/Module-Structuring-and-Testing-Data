// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work

//The code will not work because it tries to use a string method on a number

// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different? 

// error is  TypeError: cardNumber.slice is not a function which is what I expected


// Then try updating the expression last4Digits is assigned to, in order to get the correct value
// by concatenating an empty string the code works as expected
const cardNumber = (4533787178994213).toString();
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits); // should log '4213'

