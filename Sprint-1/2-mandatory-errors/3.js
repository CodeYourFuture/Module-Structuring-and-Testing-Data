const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// the code is not working becuase slide method is for strings where as cardNumber is a number. We should convert the cardNumber to string before using slice method.
//Synax error in line 2, but the result is not clear from the output.

const last4Digits = cardNumber.toString().slice(-4);
console.log(`The last 4 digits of ${cardNumber} are ${last4Digits}`);