const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);
let str = cardNumber.toString().slice(-4);
const last4Digits = Number(str);
console.log(`${last4Digits} is the last 4 digits of ${cardNumber}`);

//console.log(typeof last4Digits);

// 1- the code is not working because 'slice()' method is not working with numbers.
// 2- it gives "type error" cardNumber.slice is not a function.
// 3- my prediction was correct as I studied the slice method and knew it.

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
