const penceString = "399p";

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

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

//Answer:
//const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1); 
//This line creates a new variable penceStringWithoutTrailingP that contains the string "399" by using substring to extract all characters from the start (index 0) up to (but not including) the last character (length - 1). This effectively removes the trailing 'p'.

//const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); 
//This line initializes paddedPenceNumberString by padding the penceStringWithoutTrailingP with leading zeros to ensure that it is at least 3 characters long. If the string is less than 3 characters, it adds zeros to the left. For "399", it remains "399", but for values like "9", it would become "009".

//const pounds = paddedPenceNumberString.substring(  0,paddedPenceNumberString.length - 2);
//This line initializes the variable pounds by taking a substring of paddedPenceNumberString that contains everything except the last two characters. This gives the pounds value. For "399", the pounds would be "3", and for "009", it would be "0".

//const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
//The first part extracts the last two characters of paddedPenceNumberString, which represent the pence amount. For "399", this will be "99", and for "009", it would be "09".
//The padEnd(2, "0") ensures that the extracted string is two characters long. If there are fewer than two characters, it pads with trailing zeros. This ensures that even if the value was "5", it would convert to "05".

  
  

