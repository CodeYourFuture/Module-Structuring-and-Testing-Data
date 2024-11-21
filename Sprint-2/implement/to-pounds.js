// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


//okay we can use the code snip from sprint 1 and just modify it to fit our requirements.

function toPounds(pence){
    
    const penceString = pence;

    const penceStringWithoutTrailingP = penceString.substring(
      0,
      penceString.length - 1
    );
    
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    const pounds = paddedPenceNumberString.substring(
      0,
      paddedPenceNumberString.length - 2
    );
    
    const pence = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");
    
    return `£${pounds}.${pence}`; // add a return instead of a print statement.
}

console.log(toPounds("765p"));