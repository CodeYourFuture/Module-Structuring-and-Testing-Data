// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


//--------------------Prediction:
// The code will not work because the `cardNumber` variable is defined as a number, and the `slice` method only works for strings and arrays.

// ------------------------Error:
// After running the code, I see that it gives a 'TypeError: cardNumber.slice is not a function'

//-------------------Explanation:
// The TYPE error ocurs because the 'last4Digits' variable is attempting to execute the slice method on a number, which is what I predicted.

//---------------------------Fix:
// To fix this, we need to convert the `cardNumber` to a string before using the `slice` method.

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits); 





  