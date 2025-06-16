const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// The method .slice() is used for strings and arrays. As cardNumber is a number, it will not work.
// When running the code, it gives the error:”cardNumber.slice is not a function”
// It gives this error because the string method .slice() cannot be used with numbers, so Javascript does not recognise cardNumber.slice as a valid function.
//To resolve the error, we need to convert cardNumber to a string by using the method .toString() and then use the .slice() method
