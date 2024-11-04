const cardNumber = [4,5,3,3,7,8,7,1,7,8,9,9,4,2,1,3];
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/* The error was caused by the fact that .slice is an array method/function. So I had to assign "cardNumber" to an array and separate each number with a comer */
