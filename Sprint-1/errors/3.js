const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work

// I beleive the code isnt working because we are using a negative integer and instead it needs to be whole number

// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?

/* I didnt predict this error and i initally thought it was due to using negative integer and once i looked into the error i saw that it was because slice functions do not work on 
numbers but instead only on strings.
 */

// Then try updating the expression last4Digits is assigned to, in order to get the correct value
