// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function toPounds(pence) {
    const penceWithoutP = pence.slice(0, -1).padStart(3, "0").padEnd(2, "0");
    pence = penceWithoutP.slice(-2);
    const pounds = penceWithoutP.slice(0, -2);
    return `£${pounds}.${pence}`;
}

console.log(toPounds("399p"));
console.log(toPounds("7p"));
console.log(toPounds("2500p"));