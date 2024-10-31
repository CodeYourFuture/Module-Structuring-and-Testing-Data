const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4)

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work

//I'm guessing the code wont work because the number value is not split up into indices only letters or strings are?\
//.slice cant be used on numbers


// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

console.log(last4Digits);

//had to convert the number to a string 1st