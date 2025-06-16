// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function topound(penceString){                    
  if (!penceString || !penceString.endsWith("p")) {
    return "Invalid input: must be a non-empty string ending with 'p'";
  }
  //adding If condition to make sure inputs end with p.
let penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
if (isNaN(penceStringWithoutTrailingP)

) {
    return "Invalid input: not a number";
  }
// If condition to check input is always a number.
let paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
let pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

let pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

 return `£${pounds}.${pence}`
 
}
 
console.log(topound("358p"));  //  £3.58
console.log(topound("9p"));    //  £0.09
console.log(topound("0p"));    //  £0.00
console.log(topound("12p"));   //  £12.0
console.log(topound("abc"));   // Invalid input: must be a non-empty string ending with 'p'
console.log(topound("123"));   //  Invalid input: must be a non-empty string ending with 'p'