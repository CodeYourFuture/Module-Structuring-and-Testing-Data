const cardNumber = 4533787178994213;
//console.log(typeof cardNumber);
 
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits); // Output: "4213"

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
// I suspect the code doesn't work because the slice method is being called on a number, but slice is a method for strings. Therefore, I predict that the code will throw an error saying that slice is not a function for numbers.

// i console the typeof cardNumber  and it returns number


