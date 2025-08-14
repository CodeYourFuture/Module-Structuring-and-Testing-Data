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

// 2. const penceStringWithoutTrailingP = penceString.substring( 0, penceString.length - 1);
// The purpose of line 3 is to remove the trailing 'p' from the string to leave just the numeric part.
// As a result, "399p" (as seen in line 1) becomes "399".  

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); 
//The purpose of line 8 is to ensure that the string is at least 3 characters long.
// It adds zeros at the start if the string is shorter than 3 digits.
// In this case, "399" is already 3 digits long, so nothing is added.

//4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
// This takes the last two digits to get the pounds part.
//In this scenario, "399", we get "3" as pounds.

//5. const pence = paddedPenceNumberString .substring(paddedPenceNumberString.length - 2) .padEnd(2, "0");
// This gets the last two digits from the string to show the pence.
// If the result is only one digit, it adds a zero at the end to make it two digits.
// In this case, "399" gives us "99", so nothing additional is added.

//6. console.log(`£${pounds}.${pence}`);
// This line prints out the final price in pounds and pence.
// It combines the pounds and pence with a £ symbol and a dot in between.
// In this example,  pounds = "3" and pence = "99"; it will print "£3.99".