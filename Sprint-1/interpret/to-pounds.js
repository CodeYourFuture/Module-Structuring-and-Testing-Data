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
  console.log(pence)

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

/*
  To begin, we can start with
  1. const penceString = "399p": initialize a string variable with the value "399p"

  2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
    ----- This is removing the last character from the string and because is negative argument 
          we should provide the starter point and end index to override the character.

  3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    ----- The padStart function modifies the string by adding a specified character at the 
          beginning if the string is shorter than the desired length. In this case, 
          padStart(3, "0") checks if the string has fewer than 3 characters. If it does, 
          it adds "0" at the beginning until the string reaches a length of 3. eg.
          const penceString = "9p";  => £0.09 
          const penceString = "44p"; => £0.44
          const penceString = "0p";  => £0.00

  4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
    ----- Here we are using again subtracting function to extract the integer number removing 
          the decimals given the argument(0, string.length -2). this means return the string 
          starting from position 0 and removing the last two characters.

  5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
    ----- Extracting the decimal numbers and gets the last two characters of the string, which 
          represent the pence part.

  6. console.log(`£${pounds}.${pence}`);
    ----- This line displays the formatted currency value by using template literals to interpolate 
          the pounds and pence variables into a single string. The £ symbol is added at the beginning 
          to indicate currency. eg.
          const penceString = "399p"; => £3.99
*/
