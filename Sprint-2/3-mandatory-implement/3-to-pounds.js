// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

const toPounds =(penceString)=>{
     const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
  
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
       console.log(paddedPenceNumberString)
  const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");
      return `£${pounds}.${pence}`;

}
console.log(toPounds("99p")); // £3.99
console.log(toPounds("99p")); // £0.99
console.log(toPounds("9p"));  // £0.09
console.log(toPounds("0p"));  // £0.00
console.log(toPounds("1005p"));// £10.05