const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//Answer
//i think it will give me the digits except the last 4 digits.
//the error is .slice is not a function. this is because it is only used with strings and arrays not numbers.
//so i have to change the format of the number to string by using .toString()
//now it will give the last 4 digits of our string.
