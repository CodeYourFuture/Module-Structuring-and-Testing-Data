const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// the response to this question is that the code won't work because the `slice` method is being called on a number, 
// but `slice` is a method that is only available for strings and arrays. Since `cardNumber` is a number, 
// it does not have the `slice` method, which will result in a TypeError when the code is run.
// To fix this, we can convert `cardNumber` to a string before calling the `slice` method.
// Here's the corrected code:
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits); // Outputs: "4213"
//or we can use this to get the last 4 digits of cardNumber
// Put quotes around it to make it a string from day one
const cardNumber = "4533787178994213"; 

// Now .slice() works perfectly instantly
const last4Digits = cardNumber.slice(-4);

console.log(last4Digits); // Outputs: "4213"