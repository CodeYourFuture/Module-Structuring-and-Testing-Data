// IN SPRINT-1, THERE IS A PROGRAM WRITTEN IN INTERPRET/TO-POUNDS.JS
// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.
// You should call this function a number of times to check it works for different inputs


function penceToPounds(pence) {

  pence = pence.toString()

  pence = pence.replaceAll("p", ""); //remove any ps present


  pence = pence.replace(/^0+/, ""); //remove any leading 0s 

  pence = pence.padStart(3, "0"); // if string has a length<3, pad it with leading 0s until it reaches length 3 (983p =>=> 983, 40p ==> 40 ==> 040)

  return `£${pence.slice(0, -2)}.${pence.slice(-2).padEnd(2, "0")}`
    
}

const myPennies = 369;
console.log(penceToPounds(myPennies)); //expect £3.69
console.log(penceToPounds('963')); //expect £9.63
console.log(penceToPounds('183000p')) //expect £1830.00
console.log(penceToPounds('000762')); //expect £7.62
console.log(penceToPounds('63')); //expect £0.63
console.log(penceToPounds('3')); //expect £0.03
console.log(penceToPounds('abcdefg')) //further input validation would be needed

// changelist:
// created reusable function
// removed unnecessary extra variable declarations
// added line to remove any leading 0s in the original string
// using .slice() instead of .substring() because it's easier to read
// added .toString() at the beginning of the function to allow it to take number inputs





// || CODE FROM SPRINT 1:
/* const penceString = "399p";

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

console.log(`£${pounds}.${pence}`); */
