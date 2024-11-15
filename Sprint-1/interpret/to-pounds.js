const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
  console.log(penceStringWithoutTrailingP);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  console.log(paddedPenceNumberString);

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
  console.log(pounds);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  console.log(pence); 

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p"
// 3. initializes a variable that removes the "p" at the end, it uses method .substring
// which returns the part of the string corresponding to the index and end index
//-1 excluding the p
//9. uses the method padstart to add "0" to the start of string penceStringWithoutTrailingP,
// it returns the same string unchanged because the target length is equal to the current length.
// this effectively multiplies any value input as penceStringWithoutTrailingP by 100
//12. uses the substring method to return the first value of the string, this is to get
// the pound. it also used length -2 to make sure its in a valid range so the program
// can go through the steps with any value input.
//18.the code gets the last two digits from the paddedPenceNumberString and ensures that the result
//is a two-digit string by padding it with 0.
//23. Print the value of pounds and pence with a period in between using template literals.
