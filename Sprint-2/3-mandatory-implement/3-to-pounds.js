// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(pennies) {
    const pounds = (parseInt(pennies.replace("p", ""), 10)) / 100;
    return pounds.toFixed(2); 
}
// calling the function to make sure it works
console.log(toPounds("32391p"));   
console.log(toPounds("3239p"));    
console.log(toPounds("323p")); 
console.log(toPounds("32p"));
console.log(toPounds("3p"));



