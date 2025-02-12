// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different input
// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function toPounds(penceString) {
    
    const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
  
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  
    const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);

    const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
  
    
    return `£${pounds}.${pence}`;
  }
  
  console.log(toPounds("3p"));    
  console.log(toPounds("30p"));   
  console.log(toPounds("233p"));  
  console.log(toPounds("874p"));  
  console.log(toPounds("100p")); 