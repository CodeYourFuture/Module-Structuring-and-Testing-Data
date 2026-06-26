const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits);

//const cardNumber = 4533787178994213;
//const lastdig = cardNumber.toString().slice(-4);
//console.log(lastdig);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/* 
Slice is a string method we are using it on number.
We can convert the number into string and then apply slice() method to retrieve last four digits or simply we 
can declare number as a string using quotes.
Run a code : It gives TypeError and js gives this error when method/operation isn't valid for particular data 
type using.
I got the idea of data type that slice() method can't use for this data type.
I attempt it by both ways I mentioned above.
*/
