// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// PREDICTION:
// I actually don't know how slice works well enough yet to guess! Is it maybe only returning the last 3 values?

// ACTUAL ERROR
// TypeError: cardNumber.slice is not a function

// CONSIDER
// Ohhhh, .slice is a string/array method. cardNumber is a number not an array.

// UPDATE:

const cardNumber = "4533787178994213";  //enter card number as a string

// console.log(typeof(cardNumber));

last4Digits = cardNumber.slice(-4); //can now use string method
console.log(last4Digits);
