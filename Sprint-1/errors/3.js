const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/* The TypeError given during debugging is that cardNumber.slice is not a function.

The code won't work because cardNumber is a number and .slice works with strings and arrays.
Assuming that cardNumber cannot be modified by adding commas between each character to create an array 
(this would run the code without bugs but it would not be logical to modify the cardNumber) the solution is to convert
cardNumber to a string and then either use the .slice or .substring methods.
Solution: Let last4Digits = cardNumber.toString().slice(12,17); 
(This solution would only work if the card number has a standard amount of characters, in this case 16
because the parameters of 12 and 17 for the substring/slice have been programmed.)
