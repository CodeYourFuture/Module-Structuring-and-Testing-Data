// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function formatPenceToPounds(amountInPence) {
    // Remove the "p" at the end of the string (e.g., "399p" → "399")
    const penceStringWithoutTrailingP = amountInPence.substring(
      0,
      amountInPence.length - 1
    );
  
    // Add leading zeros so it’s at least 3 digits (e.g., "9" → "009")
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  
    // Get all but the last 2 digits as the pounds part (e.g., "399" → "3")
    const pounds = paddedPenceNumberString.substring(
      0,
      paddedPenceNumberString.length - 2
    );
  
    // Get the last 2 digits as the pence part (e.g., "399" → "99")
    const pence = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");
  
    // Return the formatted result in pounds (e.g., "£3.99")
    return `£${pounds}.${pence}`;
  }

//  Different inputs:
console.log(toPounds("499p")); // £4.99
console.log(toPounds("99p"));  // £0.99
console.log(toPounds("7p"));   // £0.07
console.log(toPounds("0p"));   // £0.00
console.log(toPounds("1234p"));// £12.34
