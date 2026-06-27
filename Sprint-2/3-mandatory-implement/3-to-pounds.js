// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function toPounds(pence) {
 const remainingPence = (pence % 100);
 const Pounds = (pence - remainingPence) / 100;
 return `£${Pounds}.${remainingPence}`;
} 
 
console.log (toPounds(155));
console.log (toPounds(99));
console.log (toPounds(10000));
