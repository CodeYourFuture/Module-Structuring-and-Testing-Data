const cardNumber = 4533787178994213;
const numberString = cardNumber.toString();
const last4Digits = numberString.slice(-4);
const num = Number(last4Digits);

console.log(num);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value



// explanation: to see the numbers correctly we need to convert the cardNumber to a string
//  first before slicing the last 4 digits. The original code was trying to use slice 
//  a number, which is not valid. By converting it to a string first, 
//  we can then slice the last 4 characters correctly. Then we convert it back to a number.