// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(numInPence){
    let num = Number(numInPence.slice(0, -1))
    let numberInPounds = num / 100;
   return `£${numberInPounds.toFixed(2)}`
}
console.log(toPounds("21p"))