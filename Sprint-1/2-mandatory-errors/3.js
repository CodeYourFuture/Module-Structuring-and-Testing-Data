const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits);
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
//the slice method is used for strings not numbers.
// Then run the code and see what error it gives.
//Uncaught TypeError: cardNumber.slice is not a function
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
//javascript can not slice a number 
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
//I have added the console.log to see the output.
//there is another way to get the last 4 digits by using slice method is to convert the number to a string first by using toString() method
const last4Digits = cardNumber.toString().slice(-4); //it wil print "4213"
//If you want it to be a number, you can convert it back:
const last4Digits = Number(cardNumber.toString().slice(-4));
Now last4Digits will be 4213 as a number.