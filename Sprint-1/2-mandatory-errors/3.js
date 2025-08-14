// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/* This code throws an error because `cardNumber` is a **number**, and numbers do not have a `.slice()` method—`.slice()` is a method for strings and arrays.

**How to fix:**  
Convert `cardNumber` to a string before using `.slice()`:

````javascript
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
````

Now, `last4Digits` will correctly contain the last 4 digits as a string.*/

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);
