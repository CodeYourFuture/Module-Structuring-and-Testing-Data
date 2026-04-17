const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work

//ANS: code will throw an error
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?

//ANS:
//The .slice() method is a String (and Array) method. cardNumber is defined as a Number. Numbers in JavaScript do not have a .slice() property

// Then try updating the expression last4Digits is assigned to, in order to get the correct value


//ANS:
const cardNumber = 4533787178994213;

// Convert to string first, then slice
const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits); // "4213"