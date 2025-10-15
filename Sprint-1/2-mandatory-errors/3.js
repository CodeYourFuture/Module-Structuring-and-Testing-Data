const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits);

//I predicted the error which is type error. cardNumber is a number not a string.
//.slice() only works on strings (or arrays).
//Numbers in JavaScript do not have a slice method.
