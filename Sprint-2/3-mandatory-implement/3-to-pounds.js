// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function toPounds(penceString){
    const penceStringWithoutTrailingP = penceString.substring(
      0,
      penceString.length - 1
    );
    //without p in the end
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    //make sure we have at least 3 digits
    const pounds = paddedPenceNumberString.substring(
      0,
      paddedPenceNumberString.length - 2
    );
    //get the pounds
    const pence = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");
      //get the pence
    return `£${pounds}.${pence}`;
}
console.log(toPounds("1000p"));