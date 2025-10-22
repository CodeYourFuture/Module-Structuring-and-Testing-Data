// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(pennies) {
    const pounds = pennies / 100;
    return pounds.toFixed(2); 
}

// calling the function to make sure it works
console.log(toPounds(32391));   
console.log(toPounds(3239));    
console.log(toPounds(323)); 
console.log(toPounds(32));
console.log(toPounds(3));
