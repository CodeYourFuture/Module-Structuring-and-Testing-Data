// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(penceString) {
    // Check if the string contains the "p" character at the end
    if (penceString.endsWith("p")) {
        // Remove the trailing "p" using replace
        penceString = penceString.replace("p", "");
    }
    
    // Convert the string to a number
    const penceAmount = parseInt(penceString, 10);
    
    // Convert pence to pounds by dividing by 100
    const poundsAmount = penceAmount / 100;
    
    // Return the result in pounds formatted as currency (with "£" symbol)
    return `£${poundsAmount.toFixed(2)}`;
}

// Testing the function with different inputs
console.log(toPounds("100p"));  // £1.00
console.log(toPounds("250p"));  // £2.50
console.log(toPounds("75p"));   // £0.75
console.log(toPounds("500p"));  // £5.00
console.log(toPounds("20"));    // £0.20


