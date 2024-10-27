const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
console.log(last4Digits);
//TypeError: cardNumber.slice is not a function
//the error is occured because cardNumber variable stored a number not a string ,this was as I predicted
//in order to make this string I add toString function to change it to string under the colon
//root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/errors# node 3.js
//4213