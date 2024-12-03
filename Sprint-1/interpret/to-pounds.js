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



//1-const penceString = "399p";
//Initializes a string variable penceString with the value "399p". This represents a price in pence, with the suffix "p" indicating pence.
//2-const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// Creates a new string, penceStringWithoutTrailingP, by removing the last character ("p") from penceString. This leaves only the numeric portion ("399") of the pence value, which we’ll use to convert to pounds.
//3- const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Ensures that the numeric pence value has at least three characters, padding it with leading zeros if necessary. The .padStart(3, "0") method pads penceStringWithoutTrailingP to the left with zeros until it reaches a length of 3. In this example, penceStringWithoutTrailingP is already "399", so it remains unchanged.
//4-const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
//Extracts the "pounds" portion by taking all but the last two characters of paddedPenceNumberString. Here, paddedPenceNumberString is "399", so this line takes the first character ("3") and assigns it to the pounds variable, representing the pounds portion of the amount.
//5-const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
//Extracts the "pence" portion by taking the last two characters of paddedPenceNumberString. Here, this extracts "99" from "399", which represents the pence portion of the amount.
//The .padEnd(2, "0") ensures that the result has two digits, adding an extra "0" if only one digit exists. In this example, it remains "99" since there are already two digits.
//6-console.log(£${pounds}.${pence});
//Logs the final formatted price string to the console. Using template literals, it combines the pounds and pence values into the format £X.YY. For our example, this produces £3.99.
//This program takes a price in pence (like "399p") and converts it to a properly formatted pounds and pence string (like £3.99). It pads numbers as needed to ensure a consistent format and removes the "p" suffix, allowing the price to be displayed in standard currency format.