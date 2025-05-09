// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//Sam
//Trying to check what is not working with code
// console.log(last4Digits);
//Received : TypeError: cardNumber.slice is not a function
//Prediction : Maybe it's because it's stored in constant variable

//Test :
// let cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);
// console.log(last4Digits);

//Maybe the value inside cardNumber needs to be string type so .slice method can process it. I will try to change the type and run the expression again
const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits);

//Result and observation :
//Received expected output when the type was changed to string.
//Lessons Learnt : 1. Slice doesn't seem to process number values
// Lesson Learnt : 2. Always pay attention to the type of error. If I had paid attention to the type of error in the first instance I would have been able to figure out what was not working a bit sooner :)
