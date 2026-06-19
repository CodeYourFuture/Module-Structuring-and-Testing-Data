const cardNumber = 4533787178994213;
const last4Digits = (cardNumber % 10000).toString().padStart(4, "0");
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Martin comment before running the code - Slice is a string method.  In this case it fails because it is being used against a number

// Martin comment after running the code - when I run the code it gives the error - 'number.slice is not a function'.  When I research online I discover this error occurs when the slice method is applied to a value that is not a string or an array.  I have resolved this by doing research on line and discovering that modulo can be used to extract digits from a long number. By converting it to a string and adding a padStart of 4 characters, I ensure that 4 string characters are returned even in the event of a number such as 12340000
