const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//Want to extract just the last 4 digits of this number and store that in a variable called last4Digits.
const cardNumber = 4533787178994213;

const last4Digits = cardNumber.slice(-4);
//This line is the problem.
//The method .slice(-4) is used to get the last 4 characters of something, 
//like a string or array. But cardNumber is a number, not a string. 
//And JavaScript doesn’t allow .slice() on numbers.
//So, prediction: The code will throw an error because .slice() doesn’t work on numbers.

TypeError: cardNumber.slice is not a function
//Prediction confirmed: The code fails because numbers don’t have .slice().

//There are about 2 options one can use to get the right expression assigned to last4Digits. 
//Either to convert the number to a string or use math (without converting to string). 
//This example will use the first option.
//One can use .toString() or String(...) to convert the number into a string, then slice it:
const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);


//At this point, the code converts the number to a string, 
//slices '4533787178994213', and retrieves the last 4 characters: '4213'.
console.log(last4Digits); // Output: "4213"

