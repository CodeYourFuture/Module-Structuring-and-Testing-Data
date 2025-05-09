const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value



/*
1. My prediction the code is not working because slice function works with strings only as we read on
    the past exercises i dont know know what exactly the error type would be.
2. the error shown when i run the code is: TypeError: cardNumber.slice is not a function
3. to fix the code i will change cardNumber assign value to a string by adding "".
4. when i ran the fixed code it gave the correct answer 4213. 
*/
