const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);  //output: 4213

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work//because cardNumber is a number , and .slice is only available for strings . this means that the code will likely throw an error when trying to user.slice on a number.
// Then run the code and see what error it gives.//.slice is not defined for numbers.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?//slice does not work on numbers.it is only works on strings.this matches the prediction made,so the error is as expected.
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
