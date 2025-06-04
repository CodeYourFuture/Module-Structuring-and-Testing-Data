const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(`The last 4 digits of the card number are ${last4Digits}`);
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
//1. Why does it give this error?
//The error occurs because cardNumber is a number, and numbers don’t have the .slice() method. The .slice() method works on strings or arrays.

//2. Is this what I predicted?
//Not exactly. I initially thought the problem was with the argument -4 inside .slice(), maybe it should have been just 4. I did not predict that the issue was with using .slice() on a number instead of a string.

//3. What’s different?
//The actual issue is that .slice() is not a method for numbers at all, so we must convert the number to a string before slicing.

//4. How did I update the expression to get the correct value?
//I fixed it by converting the number to a string using .toString(), then applying .slice(-4) on the string: