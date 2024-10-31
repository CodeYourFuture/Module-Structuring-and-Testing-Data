const cardNumber = 4533787178994213;
cardNumber = cardNumber.toString();
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


// I believe the the code is correct. However, the first variable is considered as a string. If operation were to be done on it, the output should first be converted into an integer.

//I used toString method on the cardNumber to turn it into strings and then use slice to retrieve the last 4 digits.