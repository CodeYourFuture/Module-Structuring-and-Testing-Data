const penceString = "9p";

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

//lines 3 to 6= we asing a variable "penceStringWithoutTrailingP".
//we  use substring to start from index 0 and get the lenght 4 - 1 = 3 
// so sbtstring start form 0 and the length has 3 = 399


// line 8. We declare variale "const paddedPenceNumberString" make sure the number number has least 3 digits

//line 9 to 12= use substring to extrac from start form index 0 and string lenght taking 2 digits = reusl 3

/// lines 14 to 16= const to the pence: the start indext for Substring will be 3-2= 1
// true i got confused . padend make sure the pence part has 2 digits. if it dosen;t padend will add the 0 to it. if it has already 2 digits will stay the same 

// line 18 = template literal with the results £3.99
