const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4); // this will give error as cardNumber.slice is not a function since .slice() only works with strings and arrays

//.slice() is a method that works on strings and arrays, not on numbers.

const cardNumber = "4533787178994213"; // since i changed the number to a string now .slice() will become a function and works perfectly
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits); // will print the last 4 digits which are "4213"

// or i can use other options as well

const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);

console.log(last4Digits); // Output: "4213", this will give as the number as a string

//.slice() always return a value as a string
