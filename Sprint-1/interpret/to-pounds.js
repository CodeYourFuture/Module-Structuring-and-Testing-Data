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


//2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
//Purpose: Removes the trailing p character from the string. substring(0, penceString.length - 1) extracts the substring starting from the first character up to the second-to-last character, effectively removing the "p" and storing the result in penceStringWithoutTrailingP.
//Result: "399"


//3.Purpose: Pads the string "399" with leading zeros to ensure it's at least 3 digits long. This is useful when dealing with pence values that may be less than 100 (for example, "7" should be "007").
//Result: "399" (No padding is added since the string already has 3 digits.)


//4.const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
//Purpose: Extracts the first part of the string (representing pounds) by removing the last two digits (which represent pence). The substring is from index 0 to length - 2, effectively getting the pounds value.
//Result: "3" (the pounds part of the price).


//5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
//Purpose: Extracts the last two digits (representing pence) and ensures that it is exactly two digits long. padEnd(2, "0") adds trailing zeros if the pence part is a single digit.
//Result: "99" (the pence part of the price, no padding needed here because it's already two digits).


//6.console.log(\£${pounds}.${pence}`);`
//Purpose: Outputs the final formatted price in pounds and pence, prepended with £ to represent currency. 
//Result: £3.99