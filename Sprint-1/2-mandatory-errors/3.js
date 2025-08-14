const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

/* I expected the code to work, but I learned that the slice method only works on strings, 
and I saw that the cardNumber variable was assigned as a number. Therefore, the code should be like this */

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
