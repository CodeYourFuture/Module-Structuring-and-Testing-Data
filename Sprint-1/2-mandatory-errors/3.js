
/*Previous code
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4); */

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


//TypeError: cardNumber.slice is not a function
//the prediction that .slice() wouldn't work on a number.The code fails because of the data type mismatch (number vs. string).

//The error occurs because slice() is a string method and cardNumber is a number, so calling cardNumber.slice(-4) causes a TypeError since numbers don’t have .slice().

//Corrected Code
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits);