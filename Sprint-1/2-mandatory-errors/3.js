const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);

console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work

// I think the code will not work because cardNumber is a number, and .slice() only works with strings.

// Then run the code and see what error it gives.

//TypeError: cardNumber.slice is not a function


// Consider: Why does it give this error? Is this what I predicted? If not, what's different?

// The error happens because slice() cannot be used on a number. It only works on strings. Yes, this is what I predicted because I expected an error caused by trying to use slice() on a number. There is no difference between my prediction and the actual error.


// Then try updating the expression last4Digits is assigned to, in order to get the correct value
