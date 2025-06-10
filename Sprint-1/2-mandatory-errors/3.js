const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value



// Answers:

/// The code isn't working because the variable `cardNumber` is just a number, not a string or an array.
// The `slice` method only works on strings or arrays.
// So if we call `const last4Digits = cardNumber.slice(-4);`, it gives an error because `.slice` is not a function for numbers.
// Yes, I predicted the error because the variable `cardNumber` is not assigned a string.

const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits);
