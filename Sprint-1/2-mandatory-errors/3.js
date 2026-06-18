const cardNumber = 4533787178994213;
const last4Digits = `${cardNumber.slice(-4)}`;

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// The code won't work because cardNumber is a number, and the slice method is a string method. So the cardNumber value needs to be coverted to a string. It can be done by using the cardNumber.toString() method or by using string(cardNumber) method or even by using template literals as shown in the code snippet.

// Then run the code and see what error it gives.
// The error says cardNumber.slice is not a function. This is becuase the slice method is a string method and cardNumber is a number.

// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// At first I thought the error would be that last4Digits is not defined, but I learned that the error is actually because the slice method is being called on a number, which doesn't have that method.
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
const last4Digits = cardNumber.toString().slice(-4); // first option
const last4Digits = String(cardNumber).slice(-4); // second option
const last4Digits = `${cardNumber}`.slice(-4); // third option
