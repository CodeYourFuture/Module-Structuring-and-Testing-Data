const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);// Wrong way to do it

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// 1- Explain the error
/*
The code won't work because  In JavaScript, the slice() method is available for strings and arrays, but not for numbers 
*/
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// 2- Expected Error
/* 
The error is TypeError: cardNumber.slice is not a function. 
(YES)
*/
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
// 3- Solution
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits); // 4213
