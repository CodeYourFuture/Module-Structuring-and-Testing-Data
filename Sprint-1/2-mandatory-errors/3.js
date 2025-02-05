const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/* cardNumber.slice(-4) is giving negative integer and index start at 0. so it's giving error.
TypeError: cardNumber.slice is not a function at Object.
consider: slice function work on arrays and string not on number. If we change it in string it will work.
so we need to update in line 1 const cardNumber = "4533787178994213"; and make it string
*/
