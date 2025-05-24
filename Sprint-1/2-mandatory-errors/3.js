const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits)

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//prediction
// This will likely throw an error because we're calling the .slice() method directly on a number,


// Fix:
// To use .slice(), we first need to convert the number to a string using .toString(), 
// and then apply .slice(-4) to get the last 4 digits.