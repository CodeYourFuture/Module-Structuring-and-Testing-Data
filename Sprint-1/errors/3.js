/* const cardNumber = 4533787178994213;
   const last4Digits = cardNumber.slice(-4);  */

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Prediction:
/* The issue is that cardNumber is defined as a number, 
not a string. The slice() method works on strings or arrays, 
not numbers. Since cardNumber is a numeric type, trying to call .slice() on it will result in an error 
because numbers do not have a .slice() method. */

// To get the last 4 digits, you can convert the cardNumber to a string and then apply .slice():

cardNumber = 4533787178994213;
last4Digits = cardNumber.toString().slice(-4);