const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work

// My prediction: the code won't work because the type of const cardNumber is number, it is not a string.
// .slice() is the function that is use for the type string.

// Then run the code and see what error it gives.
// It gives TypeError: cardNumber.slice is not a function.

// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Yes, it is the same as I predicted

// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// To obtain last4Digits of the cardNumber first we need to convert the cardNumber into string.
// I am using .tostring() function to convert the cardNumber to string.

// This line will store the last four digits of the cardNumber to the variable last4Digits.
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
