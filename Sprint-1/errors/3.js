const cardNumber = 4533787178994213; // const cardNumber = `${4533787178994213}` also fixes the error by changing data type to string.
const last4Digits = cardNumber.toString().slice(-4);
console.log(`The last 4 digits of the card number are: ${last4Digits}`);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
/* the answer: slice() method does only work on strings and arrays. it does not work on numbers.
so I fixed it by changing the expression in Last4Digits variable.  */
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
