const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//I predicted that the code is not working because the cardNumber is a constant value and cannot be changed
// but actually we are not changing the value of cardNumber we are just slicing it which will be stored in a different variable
//and the cardNumber value will remain the same
//After running the code, I have realized that the code is not working because cardNumber is a number and the slice is a method in String class
//so, in order to make it work, we need to change cardNumber to String before calling the slice method

const last4Digits = (cardNumber + "").slice(-4);
console.log("Last four digits of card are : " + last4Digits);
