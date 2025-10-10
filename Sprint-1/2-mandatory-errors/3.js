const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4); // Updated this line to convert number to string first
console.log(last4Digits); // THis is added to see the output of the expression. Should print 4213

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work - I am not very familiar with the slice method on numbers.
/*  My prediction is that the slice method is not a function that can be used on numbers, it is a function for strings and arrays.
    So I think the error will be something like "slice is not a function" or "cannot read property slice of undefined".
    I think this is because numbers do not have properties or methods like strings and arrays do.
    To fix this, I will convert the number to a string first, then use the slice method to get the last 4 digits.
    I will then convert it back to a number if needed.
    Then run the code and see what error it gives.
*/
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
