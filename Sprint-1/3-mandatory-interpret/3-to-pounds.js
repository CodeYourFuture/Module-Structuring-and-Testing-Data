const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring( // 399
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //399
const pounds = paddedPenceNumberString.substring( //3
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step


//3. This line truncates the string by index, excluding the last character, without the letter p. 
//8. This line is needed in case the variable length is shorter than 3 characters. If the variable value is less than 1 pound, calling the padStart() function guarantees that there are 3 characters so that we can later convert pence to the 0.00 format (we will add the decimal point later).
//9. saves the entire string except for the last 2 characters, i.e. the number of pounds
//14. saves the value of the last two characters, i.e. the number of pence
//18. this line outputs the final value in the standard format £0.00

