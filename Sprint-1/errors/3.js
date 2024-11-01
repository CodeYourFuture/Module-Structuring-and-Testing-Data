
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.(-4);

// console.log(last4Digits);



// String.prototype.slice()
// The slice() method of String values extracts a section of this string and returns it as a new string, 
// without modifying the original string. but in this example we have number we can extract this.
// 1 slice work only with String
// 2 we have to convert the variable to String
// 3 Option we can just added a single quotation but this variable is saving number.


const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits);