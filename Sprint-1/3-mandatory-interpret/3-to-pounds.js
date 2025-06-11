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

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// This line removes the last character from the input string, which is the letter "p" (representing pence).
// The reason we remove "p" is that we can't perform calculations on a string that includes non-numeric characters.


// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// This line ensures the string is at least three characters long by padding it with leading zeros if necessary.
// This formatting allows us to easily separate the value into pounds and pence — where the last two digits represent pence and the remaining digits represent pounds.


// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// This line extracts the pound portion of the value by taking all characters except the last two.
// For example, if the input is "399p", it becomes "399", and this line extracts "3" as the pound value.


// 5. const pence = paddedPenceNumberString
//    .substring(paddedPenceNumberString.length - 2)
//    .padEnd(2, "0");
// This line extracts the last two digits, which represent the pence.
// The `.padEnd(2, "0")` ensures that even if the pence value is only one digit (e.g., "5"), it becomes two digits (e.g., "05").
// So "5p" would correctly display as "£0.05" instead of "£0.5".


// 6. console.log(`£${pounds}.${pence}`);
// This line prints the final result in the correct British currency format.
// If the input is "399p", the output will be "£3.99".
// This step is important for presenting the value in a user-friendly and readable format.
