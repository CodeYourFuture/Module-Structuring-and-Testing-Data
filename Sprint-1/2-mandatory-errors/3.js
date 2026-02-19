const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);


console.log(last4Digits); // "4213"

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


/* I don't think it will work, because card number is a number,
and .slice() is a string method and we must convert the number to string method to work*/

//TypeError: cardNumber.slice is not a function. this was after running node.