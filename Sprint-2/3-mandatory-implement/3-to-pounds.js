// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function topounds(price){
    const penceString = price.toString()
    const getpence = penceString.substring(0,penceString.length -1)
    const paddedpence = getpence.padStart(3, '0') 
    const pound = paddedpence.substring(0, paddedpence .length -2);
    const pence = paddedpence.substring(paddedpence.length- 2);
    return `The amount is £${pound}.${pence}`
}

console.log(topounds('39p'));