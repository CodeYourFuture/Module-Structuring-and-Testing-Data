const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
console.log(last4Digits);
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/*
I predict that the code isn't working because the slice function can only extract the text from string but cardNumber is stored as an integer number.

After running the code, I got "TypeError", which confirms that slice is incompatible with the data type stored in cardNumber.
This is exactly what I predicted.

After converting cardNumber to a string using "String()", I've got the correct value 
*/
