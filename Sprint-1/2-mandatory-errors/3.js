const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);


// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/* The code will show as error as the method .slice(-4) is used with numbers and arrays.
cardNumber variable is a number, therefor the code will excute an error.*/

/* When I run the code in the terminal I get this error saying cardNumber.slice(-4) 
is not a function.*/

/* .slice() is a method used for strings and arrays.
cardNumber is a number.
Numbers in Javascript do not have the .slice() method.*/

// To correct the code the .toString() method is added to the code to convert the number to a string.

const last4Digits = cardNumber.toString().slice(-4);
console.log(cardNumber.slice(-4));

// The output should be 4213



