// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/*
I predict that the error in the above code happens because `cardNumber` is a number, and the `slice()` method is not available for numbers, it is a string method, and it can only be used on strings or arrays (a type of global 'object' used to store data. Arrays can store multiple values in a single variable). 
*/

/*
Running the code provides a TypeError at line 2 character 32, which indicates that the issue is with the type of the variable being used (i.e. number, string, boolean, float, etc.). The error also points to the "slice" method and notes that 'cardNumber.slice is not a function' which correlates with the fact that the "slice" method is not available for numbers.
*/

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

/* 
The last4Digits variable now correctly stores the last 4 digits of cardNumber by first converting the number to a string using the `toString()` method, and then applying the `slice()` method to extract the last 4 characters.
*/

console.log(last4Digits); // Output: 4213
