const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/// prediction : The code cannot work because cardNumber is defined with const. It cannot be changed.
/// Actual error: TypeError: cardNumber.toString is not a function
/// This is because cardNumber is a number, not a string. We can fix this by converting cardNumber to a string first.
