const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
console.log(penceStringWithoutTrailingP)

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
console.log(paddedPenceNumberString)

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
console.log(pounds)

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
console.log(pence)
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step


// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"


// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
//    Initialises a string variable with the value of a new string removing the last character from penceString.
//    "399"


//3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//   Initializes a new variable with the value of a new string the length of which is 3 characters.
//   "399"


//4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
//   Initializes a new variable containing a string made from paddedPenceNumberString, with the last two characters removed using the substring() method.
//   "3"


//5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
//   Extracts the last two characters of paddedPenceNumberString and ensures the result is at least two characters long by adding zeros to the end if necessary.
//   Initializes a new variable containing a string made from paddedPenceNumberString, with the first characters removed using the substring() method.
//   padEnd() method ensures the result is at least two characters, if the string is less than 2 char padEnd adds zeros.