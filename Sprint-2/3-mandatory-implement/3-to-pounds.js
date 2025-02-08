// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function changeToPounds(penceString){
    return `£${(parseInt(penceString) / 100).toFixed(2)}`;
    }

console.log(changeToPounds("3p"));
console.log(changeToPounds("39p"));
console.log(changeToPounds("00399p"));
console.log(changeToPounds("300099p"));