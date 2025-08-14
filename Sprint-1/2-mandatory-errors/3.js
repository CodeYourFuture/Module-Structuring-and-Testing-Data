const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits)

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//The code does not work because slice function only works on strings and arrays but not numbers. 
// So in it will give a TypeError when executed 
// To correct this we can either put strings on the cardNumber to turn it to a string or use .toString() function