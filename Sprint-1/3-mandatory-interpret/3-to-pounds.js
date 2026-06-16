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

// 2. space : to improve readability and structure 

// 3. - 6. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1) 
//: creating a new variable using the value of penceString - 
//.substring() will only return the value from the request index, excluding the confirmed index - 
// in this case, it will be from index 0  until the last -1, which will remove the p from the end of the string

// 7. space
// 8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0")
//: creating a new variable where we reassign the value received from penceStringWithoutTrailingP 
// this time we ensure the value has 3 characters, if not, add "0" to the Start until the value has 3 characters

// 9. - 12. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2); 
//: we take everything except the last 2 characters from the variable paddedPenceNumberString value

// 13. space

// 14. -16. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0") 
//: we take the last 2 characters from the variable paddedPenceNumberString value, ensuring we have 2 characters if not, adding 0 to the End

// 17. space

// 18. console.log(`£${pounds}.${pence}`) : we are using template literals to print the value of £pounds.pence = £3.99 onto the console
